const endpoint = "api/v1";

type CatFact = {
	_id: number
	text: string
}

export class CatAPI {
	// Get a cat fact (random or as specified by an ID) and return the JSON response
	static async getFact({signal, id}: {signal?: AbortSignal, id?: number}): Promise<CatFact | null> {
		try {
			const result = await fetch(`${endpoint}/fact${id ? '?id=' + id : ''}`, {signal});
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
	static async getFacts({signal, amount = 10}: {amount: number, signal?: AbortSignal}): Promise<CatFact[] | null> {
		try {
			const result = await fetch(`${endpoint}/facts?&amount=${amount}`, {signal});
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