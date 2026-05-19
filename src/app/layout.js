import { Inter } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/MainHeader';
import MainFooter from '@/components/MainFooter';
import Image from 'next/image';
import Link from 'next/link';
import ChatBot from '@/components/ChatBot';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Best CBSE School in Madurai | Queen Mira International School',
  description:
    'Queen Mira International School is one of the best CBSE schools in Madurai offering quality education, modern facilities, and overall student development.',
  keywords: [
    'best CBSE school in Madurai',
    'international school Madurai',
    'CIS accredited school India',
    'Queen Mira Madurai',
    'top schools in Madurai'
  ],
  alternates: {
    canonical: 'https://www.qmis.edu.in',
  },
  openGraph: {
    title:
      'Best CBSE School in Madurai | Queen Mira International School',
    description:
      'CIS accredited international school in Madurai focused on quality education and student growth.',
    url: 'https://www.qmis.edu.in/',
    siteName: 'Queen Mira International School',
    images: [
      {
        url: 'https://www.qmis.edu.in/images/school-campus.jpg',
        width: 1200,
        height: 630,
        alt: 'Best CBSE School in Madurai',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <html lang="en">
      <head>
        {/* Basic SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Queen Mira International School" />
        <meta name="publisher" content="Queen Mira International School" />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Madurai, Tamil Nadu, India" />
        <meta name="geo.position" content="9.9252;78.1198" />
        <meta name="ICBM" content="9.9252, 78.1198" />

        {/* JSON-LD Schema */}
        <Script
          id="school-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'School',
            name: 'Queen Mira International School',
            url: 'https://www.qmis.edu.in/',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Madurai',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'India',
            },
            description:
              'Queen Mira International School is one of the best CBSE schools in Madurai and a CIS accredited school in India offering quality education.',
            sameAs: [],
          })}
        </Script>

        {/* Google Analytics */}
        {isProd && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-LR1958EW81"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-LR1958EW81');
              `}
            </Script>
          </>
        )}
      </head>

      <body className={`${inter.variable} font-sans antialiased`}>
        <MainHeader />
        {children}
        <Toaster />
        {/* <ChatBot /> */}

        {/* WhatsApp Floating Button */}
        <Link
          href="https://api.whatsapp.com/send/?phone=919677715429&text=Hello"
          target="_blank"
          className="fixed bottom-5 right-5 flex items-center justify-center"
        >
          <Image
            src="/Whatsapp_Icon.png"
            alt="WhatsApp"
            width={60}
            height={60}
            className="w-14 h-14 md:w-[60px] md:h-[60px]"
          />
        </Link>

        <MainFooter />
      </body>
    </html>
  );
}
