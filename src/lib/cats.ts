const endpoint = "api/v1";

type CatFact = {
	_id: number
	text: string
}

export class CatAPI {
	// Get a cat fact (random or as specified by an ID) and return the JSON response
	static async getFact(id?: number): Promise<CatFact | null> {
		try {
			const result = await fetch(`${endpoint}/fact${id ? '?id=' + id : ''}`);
			const {data} = await result.json();

			if (!data)
				return null;
			else
				return data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	// Get a list of N cat facts and return the JSON response
	static async getFacts(amount: number = 10): Promise<CatFact[] | null> {
		try {
			const result = await fetch(`${endpoint}/facts?&amount=${amount}`);
			const {data} = await result.json();

			if (!data)
				return null;
			else
				return data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}
}