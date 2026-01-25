/* eslint-disable react-hooks/purity */
'use client';

import { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, ChevronUp, ChevronDown } from 'lucide-react';
import { faqData } from '@/lib/faqData';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hello! 👋 I'm the QMIS Assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Theme colors based on your dark blue
  const themeColors = {
    primary: '#0a0f3d', // dark blue
    primaryLight: '#1a1f4d',
    primaryLighter: '#2a2f5d',
    accent: '#3b82f6', // blue accent for highlights
    accentLight: '#60a5fa',
    textLight: '#93c5fd',
  };

  useEffect(() => {
    const randomQuestions = [...faqData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setSuggestedQuestions(randomQuestions);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle window resize to prevent overflow
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && chatContainerRef.current) {
        // Ensure chat container doesn't overflow viewport
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

  // Function to render text with clickable links - SIMPLIFIED VERSION
  const renderTextWithLinks = (text, isBot) => {
    if (!text) return text;

    // Simple regex that catches more patterns
    const urlRegex = /(\S+\.\S+\.\S+|www\.\S+\.\S+|\S+@\S+\.\S+)/gi;

    // Split by common separators to get words
    const words = text.split(/(\s+)/);

    return words.map((word, index) => {
      // Check if the word looks like a URL or email
      if (urlRegex.test(word.trim())) {
        let url = word.trim();

        // Handle email addresses
        if (url.includes('@')) {
          return (
            <a
              key={index}
              href={`mailto:${url}`}
              className={`underline hover:opacity-80 transition-opacity ${
                isBot ? 'text-blue-600' : 'text-blue-200'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {url}
            </a>
          );
        }

        // Handle website URLs
        if (!url.startsWith('http')) {
          url = 'https://' + url;
        }

        return (
          <a
            key={index}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className={`underline hover:opacity-80 transition-opacity ${
              isBot ? 'text-blue-600' : 'text-blue-200'
            }`}
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
          msg.id === messageId
            ? { ...msg, text: currentText, isTyping: true }
            : msg,
        ),
      );
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isTyping: false } : msg,
      ),
    );
  };

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    const match = findBestMatch(text);
    const botMessageId = (Date.now() + 1).toString();

    if (match) {
      const botMessage = {
        id: botMessageId,
        text: '',
        isBot: true,
        isTyping: true,
      };
      setMessages((prev) => [...prev, botMessage]);
      await typeMessage(match.answer, botMessageId);
    } else {
      const botMessage = {
        id: botMessageId,
        text: '',
        isBot: true,
        isTyping: true,
      };
      setMessages((prev) => [...prev, botMessage]);
      await typeMessage(
        "I'm sorry, I couldn't find an answer to that question. Please try asking about admissions, fees, activities, or contact information. You can also reach us at contact@queenmira.com or visit www.qmis.edu.in!",
        botMessageId,
      );
    }
  };

  const handleSuggestedQuestion = (question) => {
    handleSendMessage(question);
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
              //   margin: '0 0.25rem',
            }}
          >
            {/* Header with dark blue theme */}
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
                    QMIS Assistant
                  </h3>
                  <p className='text-xs opacity-90'>Always here to help</p>
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

            {/* Messages area */}
            <div className='flex-1 overflow-y-auto p-3 sm:p-4 bg-gray-50 space-y-3 sm:space-y-4 min-h-0'>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 ${
                      message.isBot
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
                      className={`text-xs sm:text-sm whitespace-pre-wrap wrap-break-word leading-relaxed ${
                        !message.isBot ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      {renderTextWithLinks(message.text, message.isBot)}
                      {message.isTyping && (
                        <span
                          className='inline-block w-0.5 h-3 sm:w-1 sm:h-4 ml-0.5 sm:ml-1 animate-pulse'
                          style={{
                            backgroundColor: message.isBot
                              ? themeColors.primary
                              : 'white',
                          }}
                        ></span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions accordion */}
            {suggestedQuestions.length > 0 && (
              <div className='border-t border-gray-200 shrink-0'>
                {/* Accordion header */}
                <button
                  onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                  className='w-full p-3 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between'
                  aria-label={
                    isAccordionOpen
                      ? 'Collapse quick questions'
                      : 'Expand quick questions'
                  }
                >
                  <span className='text-xs font-semibold text-gray-600'>
                    Quick Questions
                  </span>
                  {isAccordionOpen ? (
                    <ChevronUp className='w-4 h-4 text-gray-500' />
                  ) : (
                    <ChevronDown className='w-4 h-4 text-gray-500' />
                  )}
                </button>

                {/* Accordion content */}
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
                          {faq.question.length >
                          (window.innerWidth < 640 ? 25 : 40)
                            ? faq.question.substring(
                                0,
                                window.innerWidth < 640 ? 25 : 40,
                              ) + '...'
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
                  aria-label='Send message'
                >
                  <Send className='w-4 h-4 sm:w-5 sm:h-5' />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
