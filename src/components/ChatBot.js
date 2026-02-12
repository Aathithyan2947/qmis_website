'use client';

import { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, ChevronUp, ChevronDown, User, Phone, Key } from 'lucide-react';
import { faqData } from '@/lib/faqData';
import toast from 'react-hot-toast';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [verificationStep, setVerificationStep] = useState('idle');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  // Dynamic API base URL
  const API_BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://qmis-dashboard.vercel.app/api'
    : 'http://localhost:3001/api';

  const themeColors = {
    primary: '#0a0f3d',
    primaryLight: '#1a1f4d',
    primaryLighter: '#2a2f5d',
    accent: '#3b82f6',
    accentLight: '#60a5fa',
    textLight: '#93c5fd',
  };

  // Check localStorage on mount
  useEffect(() => {
    const verified = localStorage.getItem('chatbot_user_verified');
    const savedPhone = localStorage.getItem('chatbot_user_phone');
    const savedName = localStorage.getItem('chatbot_user_name');
    if (verified && savedPhone) {
      setPhone(savedPhone);
      if (savedName) setName(savedName);
      setVerificationStep('verified');
      initChat();
    } else {
      setVerificationStep('name');
    }
  }, []);

  const initChat = () => {
    setMessages([
      {
        id: '1',
        text: "Hello! 👋 I'm the QMIS Assistant. How can I help you today?",
        isBot: true,
      },
    ]);
    const randomQuestions = [...faqData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setSuggestedQuestions(randomQuestions);
  };

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen && chatContainerRef.current) {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const findBestMatch = (query) => {
    const lowercaseQuery = query.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;
    faqData.forEach((faq) => {
      let score = 0;
      faq.keywords.forEach((keyword) => {
        if (lowercaseQuery.includes(keyword.toLowerCase())) {
          score += keyword.split(' ').length;
        }
      });
      if (lowercaseQuery.includes(faq.question.toLowerCase())) {
        score += 10;
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = faq;
      }
    });
    return highestScore > 0 ? bestMatch : null;
  };

  const renderTextWithLinks = (text, isBot) => {
    if (!text) return text;
    const urlRegex = /(\S+\.\S+\.\S+|www\.\S+\.\S+|\S+@\S+\.\S+)/gi;
    const words = text.split(/(\s+)/);
    return words.map((word, index) => {
      if (urlRegex.test(word.trim())) {
        let url = word.trim();
        if (url.includes('@')) {
          return (
            <a
              key={index}
              href={`mailto:${url}`}
              className={`underline hover:opacity-80 transition-opacity ${isBot ? 'text-blue-600' : 'text-blue-200'}`}
              onClick={(e) => e.stopPropagation()}
            >
              {url}
            </a>
          );
        }
        if (!url.startsWith('http')) {
          url = 'https://' + url;
        }
        return (
          <a
            key={index}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className={`underline hover:opacity-80 transition-opacity ${isBot ? 'text-blue-600' : 'text-blue-200'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {word}
          </a>
        );
      }
      return word;
    });
  };

  const typeMessage = async (text, messageId) => {
    const words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
      const currentText = words.slice(0, i + 1).join(' ');
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId ? { ...msg, text: currentText, isTyping: true } : msg
        )
      );
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isTyping: false } : msg
      )
    );
  };

  const logQuestion = async (question, answer) => {
    try {
      const savedPhone = localStorage.getItem('chatbot_user_phone') || phone;
      await fetch(`${API_BASE_URL}/chatbot/save-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: savedPhone.replace(/\D/g, ''),
          message: question,
          response: answer,
        }),
      });
    } catch (err) {
      console.error('Failed to log question:', err);
    }
  };

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = { id: Date.now().toString(), text: text.trim(), isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    const match = findBestMatch(text);
    const botMessageId = (Date.now() + 1).toString();

    let answerText = '';
    if (match) {
      answerText = match.answer;
    } else {
      answerText =
        "I'm sorry, I couldn't find an answer to that question. Please try asking about admissions, fees, activities, or contact information. You can also reach us at contact@queenmira.com or visit www.qmis.edu.in!";
    }

    const botMessage = { id: botMessageId, text: '', isBot: true, isTyping: true };
    setMessages((prev) => [...prev, botMessage]);
    await typeMessage(answerText, botMessageId);

    // Log after typing completes
    logQuestion(text, answerText);
  };

  const handleSuggestedQuestion = (question) => {
    handleSendMessage(question);
  };

  // ===== VERIFICATION FLOW =====
  const initiateVerification = async () => {
    if (!name.trim()) {
      toast.error('Please enter your name');
      return;
    }

    // Validate phone number (10 digits)
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/chatbot/register-user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: cleanPhone
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        if (data.verified) {
          // User already exists — skip OTP
          localStorage.setItem('chatbot_user_verified', 'true');
          localStorage.setItem('chatbot_user_phone', cleanPhone);
          localStorage.setItem('chatbot_user_name', name.trim());
          setVerificationStep('verified');
          initChat();
        } else {
          setVerificationStep('otp');
          setOtp('321546');
          toast.success('OTP sent successfully!');
        }
      } else {
        toast.error(data.error || 'Failed to send OTP');
      }
    } catch (err) {
      console.error('Initiate error:', err);
      toast.error('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const confirmOTP = async () => {
    if (!otp || otp.length !== 6) {
      toast.error('Please enter a 6-digit OTP');
      return;
    }

    setIsLoading(true);
    try {
      const cleanPhone = phone.replace(/\D/g, '');
      const res = await fetch(`${API_BASE_URL}/chatbot/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: cleanPhone,
          otp
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem('chatbot_user_verified', 'true');
        localStorage.setItem('chatbot_user_phone', cleanPhone);
        localStorage.setItem('chatbot_user_name', name.trim());
        setVerificationStep('verified');
        initChat();
        toast.success('Verified successfully!');
      } else {
        toast.error(data.error || 'Invalid OTP');
      }
    } catch (err) {
      console.error('Confirm error:', err);
      toast.error('Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Format phone number for display
  const formatPhoneNumber = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} ${cleaned.slice(6, 10)}`;
  };

  const renderVerificationScreen = () => {
    switch (verificationStep) {
      case 'name':
        return (
          <div className='p-4 flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <User className='w-5 h-5 text-gray-500' />
              <h3 className='font-semibold'>Welcome! What is your name?</h3>
            </div>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your full name'
              className='px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              onKeyDown={(e) => e.key === 'Enter' && setVerificationStep('phone')}
            />
            <button
              onClick={() => setVerificationStep('phone')}
              disabled={!name.trim()}
              style={{ background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.primaryLight} 100%)` }}
              className='text-white py-2 rounded-lg disabled:opacity-50'
            >
              Next
            </button>
          </div>
        );
      case 'phone':
        return (
          <div className='p-4 flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <Phone className='w-5 h-5 text-gray-500' />
              <h3 className='font-semibold'>Your WhatsApp number?</h3>
            </div>
            <div className={`flex border rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-gray-300`}>
              <span className="px-3 bg-gray-100 flex items-center text-sm font-medium text-gray-700 border-r">
                +91
              </span>
              <input
                type='tel'
                value={formatPhoneNumber(phone)}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '');
                  if (value.length > 10) value = value.slice(0, 10);
                  setPhone(value);
                }}
                placeholder='Enter 10-digit number'
                className='p-2 w-full outline-none text-sm'
                onKeyDown={(e) => e.key === 'Enter' && initiateVerification()}
              />
            </div>
            <div className='flex gap-2'>
              <button
                onClick={() => setVerificationStep('name')}
                className='text-gray-600 py-2'
              >
                Back
              </button>
              <button
                onClick={initiateVerification}
                disabled={!phone.trim() || phone.replace(/\D/g, '').length !== 10 || isLoading}
                style={{ background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.primaryLight} 100%)` }}
                className='text-white py-2 rounded-lg flex-1 disabled:opacity-50 flex items-center justify-center'
              >
                {isLoading ? 'Sending...' : 'Send OTP'}
              </button>
            </div>
          </div>
        );
      case 'otp':
        return (
          <div className='p-4 flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <Key className='w-5 h-5 text-gray-500' />
              <h3 className='font-semibold'>Enter OTP</h3>
            </div>
            <p className='text-sm text-gray-600'>
              We sent a 6-digit code to +91{phone.replace(/\D/g, '')}
            </p>
            <input
              type='text'
              value={otp}
              readOnly
              placeholder='123456'
              maxLength={6}
              className='px-3 py-2 border rounded-lg bg-gray-100 text-center text-lg tracking-widest cursor-not-allowed focus:outline-none'
              onKeyDown={(e) => e.key === 'Enter' && confirmOTP()}
            />
            <div className='flex gap-2'>
              <button
                onClick={() => setVerificationStep('phone')}
                className='text-gray-600 py-2'
              >
                Change Number
              </button>
              <button
                onClick={confirmOTP}
                disabled={otp.length !== 6 || isLoading}
                style={{ background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.primaryLight} 100%)` }}
                className='text-white py-2 rounded-lg flex-1 disabled:opacity-50'
              >
                {isLoading ? 'Verifying...' : 'Verify'}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <style jsx global>{`
        @supports (height: 100dvh) {
          .chatbot-height {
            height: 100dvh;
          }
        }
      `}</style>

      <div className='fixed bottom-25 right-5 z-50'>
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            style={{
              background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.primaryLight} 100%)`,
            }}
            className='text-white rounded-full p-3 sm:p-4 shadow-2xl hover:shadow-blue-900/30 transition-all duration-300 hover:scale-110 group'
            aria-label='Open chat'
          >
            <Bot className='w-8 h-8 group-hover:animate-bounce' />
            <div className='absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white animate-pulse'></div>
          </button>
        )}

        {isOpen && (
          <div
            ref={chatContainerRef}
            className='bg-white rounded-xl sm:rounded-2xl shadow-2xl w-[calc(100vw-2rem)] max-w-[420px] h-[calc(100vh-8rem)] sm:h-[550px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300'
            style={{
              maxHeight: 'calc(var(--vh, 1vh) * 75)',
            }}
          >
            {/* Header */}
            <div
              style={{
                background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.primaryLight} 100%)`,
              }}
              className='text-white p-3 sm:p-4 flex items-center justify-between shrink-0'
            >
              <div className='flex items-center gap-2 sm:gap-3'>
                <div
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  className='p-1.5 sm:p-2 rounded-full'
                >
                  <Bot className='w-5 h-5 sm:w-6 sm:h-6' />
                </div>
                <div>
                  <h3 className='font-bold text-base sm:text-lg'>
                    {verificationStep === 'verified' ? 'QMIS Assistant' : 'Verification'}
                  </h3>
                  <p className='text-xs opacity-90'>
                    {verificationStep === 'verified' ? 'Always here to help' : 'Secure access'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className='hover:bg-white/20 p-1.5 sm:p-2 rounded-full transition-colors'
                aria-label='Close chat'
              >
                <X className='w-4 h-4 sm:w-5 sm:h-5' />
              </button>
            </div>

            {/* Content Area */}
            {verificationStep === 'verified' ? (
              <>
                {/* Messages area */}
                <div className='flex-1 overflow-y-auto p-3 sm:p-4 bg-gray-50 space-y-3 sm:space-y-4 min-h-0'>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 ${message.isBot
                          ? 'bg-white text-gray-800 shadow-sm border border-gray-100'
                          : 'text-white shadow-md'
                          }`}
                        style={
                          !message.isBot
                            ? {
                              background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.primaryLight} 100%)`,
                            }
                            : {}
                        }
                      >
                        {message.isBot && (
                          <div className='flex items-center gap-1.5 sm:gap-2 mb-1'>
                            <Bot
                              className='w-3.5 h-3.5 sm:w-4 sm:h-4'
                              style={{ color: themeColors.primary }}
                            />
                            <span
                              className='text-xs font-semibold'
                              style={{ color: themeColors.primary }}
                            >
                              QMIS Bot
                            </span>
                          </div>
                        )}
                        <p
                          className={`text-xs sm:text-sm whitespace-pre-wrap wrap-break-word leading-relaxed ${!message.isBot ? 'text-white' : 'text-gray-800'
                            }`}
                        >
                          {renderTextWithLinks(message.text, message.isBot)}
                          {message.isTyping && (
                            <span
                              className='inline-block w-0.5 h-3 sm:w-1 sm:h-4 ml-0.5 sm:ml-1 animate-pulse'
                              style={{
                                backgroundColor: message.isBot ? themeColors.primary : 'white',
                              }}
                            ></span>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested questions */}
                {suggestedQuestions.length > 0 && (
                  <div className='border-t border-gray-200 shrink-0'>
                    <button
                      onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                      className='w-full p-3 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between'
                    >
                      <span className='text-xs font-semibold text-gray-600'>Quick Questions</span>
                      {isAccordionOpen ? (
                        <ChevronUp className='w-4 h-4 text-gray-500' />
                      ) : (
                        <ChevronDown className='w-4 h-4 text-gray-500' />
                      )}
                    </button>
                    {isAccordionOpen && (
                      <div className='p-2 sm:p-3 bg-white border-t border-gray-100'>
                        <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                          {suggestedQuestions.map((faq) => (
                            <button
                              key={faq.id}
                              onClick={() => handleSuggestedQuestion(faq.question)}
                              style={{
                                backgroundColor: `${themeColors.primary}10`,
                                color: themeColors.primary,
                                borderColor: `${themeColors.primary}30`,
                              }}
                              className='text-xs hover:bg-opacity-20 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full transition-colors border hover:border-opacity-50 whitespace-nowrap overflow-hidden text-ellipsis max-w-full'
                            >
                              {faq.question.length > (window.innerWidth < 640 ? 25 : 40)
                                ? faq.question.substring(0, window.innerWidth < 640 ? 25 : 40) + '...'
                                : faq.question}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Input area */}
                <div className='p-3 sm:p-4 bg-white border-t border-gray-200 shrink-0'>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage(inputValue);
                    }}
                    className='flex gap-1.5 sm:gap-2'
                  >
                    <input
                      type='text'
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder='Type your question...'
                      className='flex-1 px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm min-w-0'
                    />
                    <button
                      type='submit'
                      disabled={!inputValue.trim()}
                      style={{
                        background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.primaryLight} 100%)`,
                      }}
                      className='text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100 shrink-0'
                    >
                      <Send className='w-4 h-4 sm:w-5 sm:h-5' />
                    </button>
                  </form>
                </div>
              </>
            ) : (
              /* Verification Flow */
              <div className='flex-1 flex flex-col'>{renderVerificationScreen()}</div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
