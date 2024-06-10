'use client'

import {useEffect, useState } from "react";

type CatFacts = {
	_id: string;
	text: string;
}

const Facts = () => {
	/*const [facts, setFacts] = useState<CatFacts[]>([]);

	useEffect(() => {
		fetch(`${endpoint}/facts/random?animal_type=cat&amount=10`)
			.then(response => response.json())
			.then(data => {
				setFacts(data)
			})
	}, []);*/

    return (
		<div>
			<h1>Cat Facts</h1>
			{/*<ol>
				{
					facts.map((fact) => (
						<li key={fact._id}>{fact.text}</li>
					))
				}
			</ol>*/}
		</div>
	);
};

export default Facts;