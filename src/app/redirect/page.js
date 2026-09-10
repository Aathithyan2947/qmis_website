'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function RedirectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(3);
  const hasRedirected = useRef(false);
  const redirectUrl = searchParams.get('url') || '/admissions';

  useEffect(() => {
    if (countdown <= 0) {
      if (!hasRedirected.current) {
        hasRedirected.current = true;
        router.push(redirectUrl);
      }
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, redirectUrl, router]);

  return (
    <main className="redirect-page">
      <style>{`
        .redirect-page,
        .redirect-page * {
          box-sizing: border-box;
        }
        .redirect-page {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          width: 100vw;
          height: 100vh;
          min-height: 100vh;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 24px;
          color: #ffffff;
          background:
            radial-gradient(circle at 15% 10%, rgba(211, 41, 70, 0.2), transparent 30%),
            radial-gradient(circle at 85% 90%, rgba(49, 91, 197, 0.28), transparent 38%),
            linear-gradient(135deg, #081333 0%, #101f58 52%, #07112f 100%);
          font-family: "Segoe UI", Arial, sans-serif;
        }
        .redirect-page::before,
        .redirect-page::after {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          content: '';
          filter: blur(70px);
          pointer-events: none;
        }
        .redirect-page::before {
          top: -180px;
          left: -120px;
          background: rgba(211, 41, 70, 0.25);
          animation: redirect-glow 8s ease-in-out infinite;
        }
        .redirect-page::after {
          right: -140px;
          bottom: -200px;
          background: rgba(49, 91, 197, 0.3);
          animation: redirect-glow 8s -4s ease-in-out infinite;
        }
        .redirect-page .redirect-card {
          position: relative;
          z-index: 1;
          display: flex;
          width: min(100%, 512px);
          flex-direction: column;
          align-items: center;
          padding: 40px 48px;
          border: 1px solid rgba(255, 255, 255, 0.17);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
          text-align: center;
          backdrop-filter: blur(24px);
          animation: redirect-card-in 650ms ease-out both;
        }
        .redirect-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 28px;
          animation: redirect-logo-in 600ms 120ms ease-out both;
        }
        .redirect-logo img {
          display: block;
          width: 180px;
          height: auto;
          max-width: 100%;
          margin-bottom: 16px;
          padding: 7px 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.94);
          filter: drop-shadow(0 8px 20px rgba(255, 255, 255, 0.12));
        }
        .redirect-school-name {
          margin: 0;
          color: #ffffff;
          font-size: clamp(24px, 4vw, 30px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
        }
        .redirect-school-name span {
          display: block;
          margin-top: 4px;
        }
        .redirect-copy {
          width: min(100%, 400px);
          margin-bottom: 32px;
        }
        .redirect-heading {
          margin: 0 0 12px;
          color: #ffffff;
          font-size: clamp(20px, 3vw, 24px);
          font-weight: 650;
          line-height: 1.25;
        }
        .redirect-description {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 16px;
          line-height: 1.55;
        }
        .redirect-countdown {
          position: relative;
          display: flex;
          width: 128px;
          height: 128px;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
        }
        .redirect-countdown svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }
        .redirect-countdown-value {
          color: #ffffff;
          font-size: 48px;
          font-weight: 700;
          line-height: 1;
        }
        .redirect-countdown-center {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .redirect-countdown-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 10px;
          letter-spacing: 0.18em;
          line-height: 1;
          text-transform: uppercase;
        }
        .redirect-message {
          margin: 0;
          color: rgba(255, 255, 255, 0.65);
          font-size: 16px;
          line-height: 1.5;
        }
        .redirect-message a {
          color: #ff8587;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 160ms ease;
        }
        .redirect-message a:hover {
          color: #ffffff;
        }
        @keyframes redirect-card-in {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes redirect-logo-in {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes redirect-glow {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.55; }
          50% { transform: translate3d(16px, -12px, 0) scale(1.08); opacity: 0.8; }
        }
        .redirect-card-in { animation: redirect-card-in 650ms ease-out both; }
        .redirect-logo-in { animation: redirect-logo-in 600ms 120ms ease-out both; }
        .redirect-glow { animation: redirect-glow 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .redirect-card, .redirect-logo, .redirect-page::before, .redirect-page::after { animation: none; }
        }
        @media (max-width: 520px) {
          .redirect-page { padding: 16px; }
          .redirect-page .redirect-card { padding: 32px 22px; border-radius: 22px; }
          .redirect-logo { margin-bottom: 24px; }
          .redirect-logo img { width: 150px; margin-bottom: 14px; }
          .redirect-copy { margin-bottom: 26px; }
          .redirect-description, .redirect-message { font-size: 14px; }
          .redirect-countdown { width: 112px; height: 112px; margin-bottom: 26px; }
          .redirect-countdown-value { font-size: 42px; }
        }
        @media (max-height: 560px) {
          .redirect-page { padding: 10px; }
          .redirect-page .redirect-card { padding: 16px 20px; border-radius: 20px; }
          .redirect-logo { margin-bottom: 10px; }
          .redirect-logo img { width: 120px; margin-bottom: 8px; padding: 4px 8px; }
          .redirect-school-name { font-size: 20px; }
          .redirect-copy { margin-bottom: 12px; }
          .redirect-heading { margin-bottom: 5px; font-size: 18px; }
          .redirect-description { font-size: 12px; line-height: 1.3; }
          .redirect-countdown { width: 84px; height: 84px; margin-bottom: 12px; }
          .redirect-countdown-value { font-size: 32px; }
          .redirect-countdown-label { font-size: 8px; }
          .redirect-message { font-size: 12px; }
        }
      `}</style>

      <section className="redirect-card">
        <div className="redirect-logo">
          <img
            src="/QMIS_Logo.png"
            alt="QMIS Logo"
            width={180}
            height={90}
            referrerPolicy="no-referrer"
          />

          <h1 className="redirect-school-name">
            Queen Mira
            <span className="mt-1 block">International School</span>
          </h1>
        </div>

        <div className="redirect-copy">
          <h2 className="redirect-heading">
            Redirecting to Application Form
          </h2>
          <p className="redirect-description">
            Please wait while we prepare your application form. You will be redirected shortly.
          </p>
        </div>

        <div className="redirect-countdown">
          <svg viewBox="0 0 120 120" aria-hidden="true">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="7" />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#f05a62"
                strokeLinecap="round"
                strokeWidth="7"
                strokeDasharray={`${(52 * 2 * Math.PI * countdown) / 3} ${52 * 2 * Math.PI}`}
                style={{ transition: 'stroke-dasharray 1s linear' }}
              />
          </svg>

          <div className="redirect-countdown-center">
            <div className="redirect-countdown-value">{countdown}</div>
            <div className="redirect-countdown-label">seconds</div>
          </div>
        </div>

        <p className="redirect-message">
          If you are not redirected automatically,{' '}
          <a href={redirectUrl}>
            click here
          </a>
        </p>
      </section>
    </main>
  );
}
