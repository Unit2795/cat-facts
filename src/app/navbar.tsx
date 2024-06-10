'use client'

import Link from "next/link";
import Image from "next/image";
import './navbar.css';
import {usePathname} from "next/navigation";
import {useEffect, useRef, useState} from "react";

export const Navbar = () => {
	const path = usePathname();

	const homeRef = useRef<HTMLAnchorElement>(null);
	const factsRef = useRef<HTMLAnchorElement>(null);
	const [pillStyle, setPillStyle] = useState<{
		width: number;
		left: number;
		opacity: number;
	} | undefined>(undefined);

	useEffect(() => {
		// Determine if the active link is in the navbar
		const isActiveInNavbar = ['/', 'facts'].includes(path);

		let newStyle = { width: 0, left: 0, opacity: 0 };

		if (path === '/' && homeRef.current) {
			newStyle = {
				width: homeRef.current.offsetWidth,
				left: homeRef.current.offsetLeft,
				opacity: 1
			};
		} else if (path === '/facts' && factsRef.current) {
			newStyle = {
				width: factsRef.current.offsetWidth,
				left: factsRef.current.offsetLeft,
				opacity: 1
			};
		}
		else
			newStyle = { width: 0, left: 0, opacity: 0 };

		// Delay application to allow for DOM measurements on initial render
		const timeoutId = setTimeout(() => setPillStyle(newStyle), 100);
		return () => clearTimeout(timeoutId);
	}, [path]);

    return (
		<nav className={'flex justify-between items-center mx-6'}>
			<Link href={"/"}>
				<Image src={'/cat-sleep.png'} alt={"Curled up cat sleeping"} height={64} width={64}/>
			</Link>
			<div className={"flex-grow flex justify-center gap-6 relative"}>
				<Link ref={homeRef} href={"/"} className={"nav-item"}>
					<div>Home</div>
				</Link>
				<Link ref={factsRef} href={"/facts"} className={"nav-item"}>
					<div>Facts</div>
				</Link>
				<div className="active-pill" style={{ ...pillStyle }}/>
			</div>
		</nav>
	);
};

export default Navbar;