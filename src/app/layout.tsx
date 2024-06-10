import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
            <nav>
                <Link href={"/"}>Home</Link>
                <Link href={"/facts"}>Facts</Link>
            </nav>
            {children}
        </body>
      </html>
  );
}
