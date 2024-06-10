const endpoint = "https://cat-fact.herokuapp.com";

type CatFact = {
	_id: string
	__v: number
	text: string
	updatedAt: string
	deleted: boolean
	source: string
	sentCount: number
}

class CatAPI {
	// Get a cat fact (random or as specified by an ID) and return the JSON response
	async getFact(id?: string): Promise<CatFact | null> {
		try {
			const result = await fetch(`${endpoint}/facts/${id || "random"}`);
			return await result.json();
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	// Get a list of N cat facts and return the JSON response
	async getFacts(amount: number = 10): Promise<CatFact[] | null> {
		try {
			const result = await fetch(`${endpoint}/facts/random?animal_type=cat&amount=${amount}`);
			return await result.json();
		} catch (error) {
			console.error(error);
			return null;
		}
	}
}