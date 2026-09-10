'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function RedirectPage() {
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(3);
  const redirectUrl = searchParams.get('url') || '/admissions';

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = redirectUrl;
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, redirectUrl]);

  return (
    <main className="relative min-h-[70vh] overflow-hidden bg-[#0a0f3d] text-white">
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .pulse-dot {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-[-60px] top-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-[-40px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center px-4 py-16 md:px-8">
        <div className="w-full text-center">
          <div className="mb-10 flex flex-col items-center justify-center">
            <Image
              src="/QMIS_Logo.webp"
              alt="QMIS Logo"
              width={220}
              height={110}
              className="mb-5 h-auto w-auto max-w-[220px]"
              priority
            />

            <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Queen Mira
              <span className="mt-1 block">International School</span>
            </h1>
          </div>

          <div className="mx-auto mb-10 max-w-xl">
            <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
              Redirecting to Application Form
            </h2>
            <p className="text-base text-white/80 md:text-lg">
              Please wait while we prepare your application form. You will be redirected shortly.
            </p>
          </div>

          <div className="mb-10 flex justify-center">
            <div className="relative flex h-32 w-32 items-center justify-center md:h-36 md:w-36">
              <svg
                className="absolute inset-0 h-full w-full -rotate-90"
                viewBox="0 0 120 120"
                aria-hidden="true"
              >
                <circle cx="60" cy="60" r="55" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
                <circle
                  cx="60"
                  cy="60"
                  r="55"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="8"
                  strokeDasharray={`${(55 * 2 * Math.PI * countdown) / 3} ${55 * 2 * Math.PI}`}
                  style={{ transition: 'stroke-dasharray 1s linear' }}
                />
              </svg>

              <div className="relative z-10 text-center">
                <div className="text-5xl font-bold text-white md:text-6xl">{countdown}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/70">seconds</div>
              </div>
            </div>
          </div>

          <div className="mb-10 flex justify-center gap-3">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="pulse-dot h-3 w-3 rounded-full bg-red-500"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          <p className="text-sm text-white/70 md:text-base">
            If you are not redirected automatically,{' '}
            <a href={redirectUrl} className="font-semibold text-red-400 underline underline-offset-4 transition hover:text-red-300">
              click here
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
