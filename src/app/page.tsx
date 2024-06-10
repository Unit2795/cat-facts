'use client'

import { useState } from "react";
import Link from "next/link";

export const endpoint = "https://cat-fact.herokuapp.com";

export default function Home() {
    const [fact, setFact] = useState<string>("");


  return (
	  <div>
		  <button onClick={() => {
			  fetch(`${endpoint}/facts/random`)
				  .then(response => response.json())
				  .then(data => {
					  setFact(data.text)
				  })
		  }}>Get Random Cat Fact</button>

		  {
			  fact && (
				  <p>{fact}</p>
			  )
		  }

		  <Link href={"/facts"}><p>Get a list of cat facts here!</p></Link>
	  </div>
  );
}
