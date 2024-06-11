import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Yarn from '@/assets/yarn.svg';
import clsx from "clsx";
import Navbar from "@/components/navbar/Navbar";
import PeekCat from "@/assets/peekcat.svg";
import {ReactNode} from "react";
import "./layout.css";

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
        children: ReactNode;
    }>
) {
    return (
        <html lang="en">
            <body className={clsx(inter.className)}>
                <Navbar image={<PeekCat width={64} className={"text-rose-800 cat-squish"} alt={"Icon of a cat peeking over a surface curiously"}/>} links={[
                    {
                        href: "/",
                        text: "Home",
                        default: true,
                        ariaLabel: "Return to the homepage"
                    },
                    {
                        href: "/facts",
                        text: "Facts",
                        ariaLabel: "See a list of random cat facts"
                    }
                ]}/>
                <div className={'pt-16'}/>
                {children}
                <footer className={'fixed ml-8 bottom-8 right-8 opacity-20 -z-50'}>
                    <Yarn width={600} className={"max-w-full"} alt={"Ball of yarn with a small piece trailing off"}/>
                </footer>
            </body>
        </html>
    );
}
