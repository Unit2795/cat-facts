import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Yarn from '@/assets/yarn.svg';
import clsx from "clsx";
import Navbar from "@/components/navbar/Navbar";
import PeekCat from "@/assets/peekcat.svg";

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
        <html lang="en">
            <body className={clsx(inter.className)}>
                <Navbar image={<PeekCat width={64}/>} links={[
                    {
                        href: "/",
                        text: "Home"
                    },
                    {
                        href: "/facts",
                        text: "Facts"
                    }
                ]}/>
                {/*<Navbar/>*/}
                <div className={'pt-16'}/>
                {children}
                <footer className={'fixed ml-8 bottom-8 right-8 opacity-20 -z-50'}>
                    <Yarn width={600} className={"max-w-full"} />
                </footer>
            </body>
        </html>
    );
}
