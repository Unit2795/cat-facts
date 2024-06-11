'use client'

import Link from "next/link";
import './navbar.css';
import {usePathname} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import {debounce} from "@/lib/debounce";
import PeekCat from '@/assets/peekcat.svg';

export const Navbar = () => {
	const path = usePathname();
	const homeRef = useRef<HTMLAnchorElement>(null);
	const factsRef = useRef<HTMLAnchorElement>(null);
	const [leftPos, setLeftPos] = useState<number | undefined>(undefined);

	useEffect(() => {
		let newStyle = undefined;

		if (path === '/' && homeRef.current) {
			newStyle = homeRef.current.offsetLeft;
		} else if (path === '/facts' && factsRef.current) {
			newStyle = factsRef.current.offsetLeft;
		}
		else
			newStyle = undefined;

		// Delay application to allow for DOM measurements on initial render
		const timeoutId = setTimeout(() => setLeftPos(newStyle), 100);
		return () => clearTimeout(timeoutId);
	}, [path]);

	useEffect(() => {
		const debouncedResize = debounce(() => {
			if (path === '/' && homeRef.current) {
				setLeftPos(homeRef.current.offsetLeft);
			} else if (path === '/facts' && factsRef.current) {
				setLeftPos(factsRef.current.offsetLeft);
			}
		}, 100);

		window.addEventListener('resize', debouncedResize);

		return () => window.removeEventListener('resize', () => {});
	}, []);

    return (
		<nav className="flex justify-between items-center overflow-hidden bg-stone-900 border-t-rose-800 border-t-2">
			<Link href={"/"} className={"bg-rose-800 px-6"}>
				<PeekCat height={64} width={64}/>
			</Link>
			<div className={"flex-grow flex justify-center gap-6 relative nav-content self-stretch"}>
				<Link ref={homeRef} href={"/"} className={"nav-item"}>
					Home
				</Link>
				<Link ref={factsRef} href={"/facts"} className={"nav-item"}>
					Facts
				</Link>
				<div className="active-pill" style={{
					left: leftPos,
					opacity: leftPos ? 1 : 0
				}}/>
			</div>
		</nav>
	);
};

export default Navbar;