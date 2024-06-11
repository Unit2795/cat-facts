const endpoint = "api/v1";

type CatFact = {
	_id: number
	text: string
}

export class CatAPI {
	static controller = new AbortController();

	private static async fetchData<T>(url: string): Promise<T | null> {
		try {
			// Abort any ongoing request and create a new controller for the new request
			this.controller.abort();
			this.controller = new AbortController();
			const signal = this.controller.signal;

			const response = await fetch(url, { signal });
			if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

			const json = await response.json();
			return json.data || null;
		} catch (e) {
			const error = e as Error;
			if (error?.name === 'AbortError') {
				console.debug('Fetch aborted');
			} else {
				console.error('Fetch error:', error);
			}
			return null;
		}
	}

	// Get a cat fact (random or as specified by an ID) and return the JSON response
	static getFact(id?: number): Promise<CatFact | null> {
		const url = `${endpoint}/fact${id ? '?id=' + id : ''}`;
		return this.fetchData<CatFact>(url);
	}

	// Get a list of N cat facts and return the JSON response
	static getFacts(amount: number = 10): Promise<CatFact[] | null> {
		const url = `${endpoint}/facts?amount=${amount}`;
		return this.fetchData<CatFact[]>(url);
	}
}