import {useEffect, useState} from "react";
import "./slider.css"

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
		<div className={`text-container ${animation}`}>
			{currentText}
		</div>
	);
};

export default TextSlider;