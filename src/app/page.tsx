'use client'

import Refresh from '@/assets/refresh-cw.svg';
import {useEffect, useRef, useState} from "react";
import {CatAPI} from "@/lib/cats";
import clsx from "clsx";

export default function Home() {
	const [fact, setFact] = useState({
		next: "",
		current: ""
	});
	const textContainer = useRef<HTMLDivElement>(null);

	const newFact = () => {
		CatAPI.getFact().then((result) => {
			setFact(prevState => {
				return {
					...prevState,
					next: result?.text || ""
				};
			})
		});
	};

	useEffect(() => {
		newFact();
	}, []);

	useEffect(() => {
		if (fact.next !== '') {
			const timer = setTimeout(() => {
				setFact({
					current: fact.next,
					next: ""
				})
			}, 500); // Corresponds to the animation time
			return () => clearTimeout(timer);
		}
	}, [fact.next]);
	

	return (
		<div className={'py-16 flex flex-col flex-grow'}>
			<div className={"min-h-full flex-grow flex flex-col"}>
				<div className={"pb-16"}>
					<button className={"btn-primary flex mx-auto"} onClick={() => {
						newFact();
					}}>
						Generate Cat Fact!
						<Refresh className={"ml-2 animate-spin"}/>
					</button>
				</div>
				<div className={"text-slider"} ref={textContainer}>
					{fact.current && <span className={clsx(fact.next && "text-out", "max-w-96 break-words")}>{fact.current}</span>}
					{fact.next && <span className="text-in max-w-96 break-words">{fact.next}</span>}
				</div>
				{/*<div className={"text-center pt-16 text-xl px-8 max-w-96 mx-auto"}>
					{fact}
				</div>*/}
			</div>
		</div>
	);
}
