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
  title: 'Best CBSE School in Madurai | QMIS School',
  description: 'Queen Mira International School is one of the best CBSE schools in Madurai. We provide quality education, good facilities, and overall development for students.',
  keywords : 'best CBSE school in Madurai, international school Madurai, CIS accredited school India, Queen Mira Madurai, top schools in Madurai, Montessori Play School, Best residential school, Primary Secondary School Admission, Primary School Education, Pre Primary Education',
  
};

export default function RootLayout({ children }) {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <html lang='en'>
      <head>
        <link rel="canonical" href="https://www.qmis.edu.in" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Queen Mira School" />
        <meta name="publisher" content="Queen Mira Schools" />
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
        <ChatBot />

        {/* WHATSAPP FLOATING BUTTON */}
        <Link
          href='https://api.whatsapp.com/send/?phone=919677715429&text=Hello'
          target='_blank'
          className='fixed bottom-5 right-5 flex items-center justify-center'
        >
          <Image
            src='/Whatsapp_Icon.png'
            alt='WhatsApp'
            width={60}
            height={60}
            className='w-14 h-14 md:w-[60px] md:h-[60px]'
          />
        </Link>

        <MainFooter />
      </body>
    </html>
  );
}
