const endpoint = "api/v1";

type CatFact = {
	_id: number
	text: string
}

export class CatAPI {
	static controller = new AbortController();

	// Get a cat fact (random or as specified by an ID) and return the JSON response
	static async getFact(id?: number): Promise<CatFact | null> {
		try {
			// Abort any ongoing request
			this.controller.abort();

			// Create a new controller for the new request
			this.controller = new AbortController();
			const signal = this.controller.signal;

			const response = await fetch(`${endpoint}/fact${id ? '?id=' + id : ''}`, {signal});

			if (!response.ok)
				return null;

			const {data} = await response.json();

			return data || null;
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