'use client'

import {useEffect, useState } from "react";
import {endpoint} from "@/app/page";

type CatFacts = {
	_id: string;
	text: string;
}

const Facts = () => {
	const [facts, setFacts] = useState<CatFacts[]>([]);

	useEffect(() => {
		fetch(`${endpoint}/facts/random?animal_type=cat&amount=10`)
			.then(response => response.json())
			.then(data => {
				// console.log(data);
				setFacts(data)
			})
	}, []);

    return (
		<div>
			<h1>Cat Facts</h1>
			<ul>
				{
					facts.map((fact, index) => (
						<li key={fact._id}>{fact.text}</li>
					))
				}
			</ul>
		</div>
	);
};

export default Facts;