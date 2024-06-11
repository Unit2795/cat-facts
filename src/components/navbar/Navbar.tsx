import Link from "next/link";
import {ReactNode} from "react";
import './navbar.css';

export type LinkItem = {
	href: string,
	text: string
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
    return (
		<div className={"nav-root"}>
			<Link href={"/"}>
				{image}
			</Link>
			<div>
				{
					links.map((item) => {
						return (
							<Link key={item.href} href={item.href}>{item.text}</Link>
						)
					})
				}
			</div>
		</div>
	);
};

export default Navbar;