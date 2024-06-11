import Link from "next/link";

export default function Home() {
	return (
		<div>
			{/*<button onClick={() => {
				fetch(`${endpoint}/facts/random`)
					.then(response => response.json())
					.then(data => {
						setFact(data.text)
					})
			}}>Get Random Cat Fact</button>*/}


			<Link href={"/facts"}><p>Get a list of cat facts here!</p></Link>
		</div>
	);
}
