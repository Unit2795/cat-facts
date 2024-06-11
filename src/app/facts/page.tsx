'use client'

import {useEffect, useRef, useState} from "react";
import {CatAPI} from "@/lib/cats";
import {CatFact} from "@/lib/facts";
import Refresh from "@/assets/refresh-cw.svg";
import clsx from "clsx";
import Link from "next/link";

const Facts = () => {
	const [facts, setFacts] = useState<CatFact[]>([]);
	const [spinnerRotation, setSpinnerRotation] = useState(false);
	const isLoading = useRef(false);

	// Fetch a new fact, set the loading status, and start the spinner animation
	const newFacts = (id?: number) => {
		isLoading.current = true;
		setSpinnerRotation(true)
		CatAPI.getFacts()
			.then((result) => {
				if (result) {
					setFacts(result);
				}
			})
			.finally(() => {
				isLoading.current = false;
			});
	};

	/*
		Ensure spinner completes at least 1 full rotation, then evaluate if we are still loading, then either continue
		rotating or remove the rotation animation
	*/
	useEffect(() => {
		const checkLoading = () => {
			if (!isLoading.current) {
				setSpinnerRotation(false);
				clearInterval(intervalId);
			}
		};

		let intervalId: NodeJS.Timeout;
		if (spinnerRotation) {
			intervalId = setInterval(checkLoading, 1000); // Check every 1000ms
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [spinnerRotation]);

	useEffect(() => {
		newFacts();
	}, []);

    return (
		<div className={"py-16"}>
			<div className={"pb-16"}>
				<button className={"btn-primary flex mx-auto"} onClick={() => {
					newFacts();
				}}>
					Generate More Facts!
					<Refresh className={clsx("ml-2", spinnerRotation && "animate-spin")}/>
				</button>
			</div>
			<ol className={"list-decimal px-12 max-w-[600px] mx-auto"}>
				{
					facts.map((fact) => (
						<li key={fact._id} className={"my-6 hover:text-blue-500 transition"}><Link href={`/${fact._id}`} target={"_blank"}>{fact.text}</Link></li>
					))
				}
			</ol>
		</div>
	);
};

export default Facts;