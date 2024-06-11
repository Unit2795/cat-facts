'use client'

import Refresh from '@/assets/refresh-cw.svg';
import {useEffect, useRef, useState} from "react";
import {CatAPI} from "@/lib/cats";
import clsx from "clsx";
import './slider.css';
import TextSlider from "@/components/slider/TextSlider";

export default function Home({ params }: { params: { id: string } }) {
	const [fact, setFact] = useState("");
	const [spinnerRotation, setSpinnerRotation] = useState(false);
	const textContainer = useRef<HTMLDivElement>(null);
	/* Mutable ref so we can track loading status inside the setInternal closure
		(which would otherwise just capture the state value at the time of invocation)
	 */
	const isLoading = useRef(false);

	// Fetch a new fact, set the loading status, and start the spinner animation
	const newFact = (id?: number) => {
		isLoading.current = true;
		setSpinnerRotation(true)
		CatAPI.getFact(id)
			.then((result) => {
				setFact(result?.text || "")

				if (result && result._id) {
					window.history.replaceState(null, "", `/${result._id}`);
				}
			})
			.finally(() => {
				isLoading.current = false;
			});
	};

	// Fetch new fact on load
	useEffect(() => {
		const searchId = parseInt(params.id);
		newFact(searchId || undefined);
	}, []);

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

	return (
		<div className={'py-16 flex flex-col flex-grow'}>
			<div className={"min-h-full flex-grow flex flex-col overflow-hidden"}>
				<div className={"pb-16"}>
					<button className={"btn-primary flex mx-auto"} onClick={() => {
						newFact();
					}}>
						Generate New Cat Fact!
						<Refresh className={clsx("ml-2", spinnerRotation && "animate-spin")}/>
					</button>
				</div>
				<TextSlider text={fact} />
			</div>
		</div>
	);
}
