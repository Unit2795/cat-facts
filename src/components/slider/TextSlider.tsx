import {useEffect, useState} from "react";
import "./slider.css"
import clsx from "clsx";
import {usePrefersReducedMotion} from "@/lib/reduced-motion";

const TextSlider = (
	{
		text
	}: {
		text: string
	}
) => {
	const prefersReducedMotion = usePrefersReducedMotion();
	const [currentText, setCurrentText] = useState<string>("");
	const [animation, setAnimation] = useState('');

	useEffect(() => {
		if (prefersReducedMotion) {
			setCurrentText(text);
		}
		/* If loading in the text slider for the first time or with empty content, just set the text and animate in
			immediately as opposed to wasting time animating out an empty string
		 */
		else if (currentText === "")
		{
			setCurrentText(text);
			setAnimation('slide-in');
		}
		else if (text !== currentText) {
			setAnimation('slide-out');
			setTimeout(() => {
				setCurrentText(text);
				setAnimation('slide-in');
			}, 500); // Duration of slide-out animation
		}
	}, [text, currentText]);

	return (
		<div className={clsx("text-container px-8", animation)}>
			<div className={"max-w-lg text-xl leading-10"}>
				{currentText}
			</div>
		</div>
	);
};

export default TextSlider;