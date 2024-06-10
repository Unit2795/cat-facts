import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/app/navbar";

const inter = Inter({ subsets: ["latin"] });

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
            <footer className={'absolute bottom-8 right-8 opacity-20 -z-50'}>
                <Image src={'/yarn.svg'} alt={"A ball of yarn"} width={800} height={800} />
            </footer>
        </body>
      </html>
  );
}
