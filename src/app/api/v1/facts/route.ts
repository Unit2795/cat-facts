import { type NextRequest } from 'next/server'
import {getFact, getFacts} from "@/lib/facts";

export const GET = async (request: NextRequest) => {
	const params = request.nextUrl.searchParams;
	const incomingAmount = params.get('amount');
	const parsedAmount = parseInt(incomingAmount || '');

	const facts = getFacts(parsedAmount || undefined);

	if (!facts) {
		return new Response("No fact found", {
			status: 404,
		})
	}

	return Response.json({
		data: facts
	})
};