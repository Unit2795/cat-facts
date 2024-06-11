import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/navbar";
import Yarn from '@/assets/yarn.svg';
import clsx from "clsx";

const inter = Inter({
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "LCM Cat Facts",
    description: "Browse and share your favorite cat facts!",
};

export default function RootLayout(
    {
        children
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <html lang="en" className={"min-h-screen"}>
            <body className={clsx(inter.className, "min-h-screen flex flex-col relative")}>
                <Navbar/>
                <div className={'pt-16'}/>
                {children}
                <footer className={'fixed ml-8 bottom-8 right-8 opacity-20 -z-50'}>
                    <Yarn width={600} className={"max-w-full"} />
                </footer>
            </body>
        </html>
    );
}
