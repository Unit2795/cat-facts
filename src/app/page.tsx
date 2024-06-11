'use client'

import Refresh from '@/assets/refresh-cw.svg';
import {useEffect, useState} from "react";
import {CatAPI} from "@/lib/cats";

export default function Home() {
	const [fact, setFact] = useState("");

	const newFact = () => {
		CatAPI.getFact().then((result) => {
			setFact(result?.text || "")
		});
	};

	useEffect(() => {
		newFact();
	}, []);

	return (
		<div className={'pt-16 flex flex-col'}>
			<div>
				<div className={"pb-16"}>
					<button className={"btn-primary flex mx-auto"} onClick={() => {
						newFact();
					}}>
						Generate Cat Fact!
						<Refresh className={"ml-2 animate-spin"}/>
					</button>
				</div>
				<div className={"text-center pt-16 text-xl px-8 max-w-96 mx-auto"}>
					{fact}
				</div>
			</div>
		</div>
	);
}
