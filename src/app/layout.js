import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Queen Mira International School",
  description: "International CBSE School in Madurai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <MainHeader />
        {children}

        {/* WHATSAPP FLOATING BUTTON */}
        <Link
          href="https://api.whatsapp.com/send/?phone=919787570746&text=Hello"
          target="_blank"
          className="fixed bottom-5 right-5 flex items-center justify-center"
        >
          <Image
            src="/Whatsapp_Icon.png"
            alt="WhatsApp"
            width={60}
            height={60}
          />
        </Link>

        <MainFooter />
      </body>
    </html>
  );
}
