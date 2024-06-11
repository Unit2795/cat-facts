import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "@/app/navbar";
import Yarn from '@/assets/yarn.svg';

const inter = Inter({
    subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "LCM Cat Facts",
  description: "Browse and share your favorite cat facts!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>
            <Navbar/>
            {children}
            <footer className={'absolute ml-8 bottom-8 right-8 opacity-20 -z-50'}>
                <Yarn width={800} />
            </footer>
        </body>
      </html>
  );
}
