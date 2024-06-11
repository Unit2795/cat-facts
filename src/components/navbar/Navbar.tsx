'use client'

import Link from "next/link";
import {ReactNode, useEffect, useState} from "react";
import clsx from "clsx";
import {usePathname} from "next/navigation";

export type LinkItem = {
	href: string,
	text: string,
	ariaLabel: string
	default?: boolean,
}

const Navbar = (
	{
		image,
		links
	} : {
		image: ReactNode,
		links: LinkItem[]
	}
) => {
	const path = usePathname();
	const [defaultActive, setDefaultActive] = useState<number | null>(null);

	useEffect(() => {
		const hasActive = links.find((item) => item.href === path) || links.find((item) => item.default);

		if (hasActive) {
			setDefaultActive(links.indexOf(hasActive));
		}
	}, [path, links]);

    return (
		<div className={"fixed h-16 w-full flex bg-stone-900 z-10"}>
			<div className={"flex justify-center items-center"}>
				{
					links.map((item, index) => {
						const isActive = path === item.href || defaultActive === index;

						return (
							<Link aria-label={item.ariaLabel} key={item.href} href={item.href} className={clsx(isActive && "bg-rose-800", "h-16 px-8 hover:bg-rose-900 flex items-center transition duration-200")}>
								<span>{item.text}</span>
							</Link>
						)
					})
				}
			</div>
			<div className={"flex-grow"}/>
			<Link href={"/"} className={"px-6 flex items-end"} aria-label={"Return to the homepage"}>
				{image}
			</Link>
		</div>
	);
};

export default Navbar;