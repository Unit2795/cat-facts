import {useEffect, useState} from "react";
import "./slider.css"
import clsx from "clsx";

const TextSlider = (
	{
		text
	}: {
		text?: string
	}
) => {
	const [currentText, setCurrentText] = useState(text);
	const [animation, setAnimation] = useState('');

	useEffect(() => {
		if (text !== currentText) {
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