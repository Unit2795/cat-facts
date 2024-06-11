import { type NextRequest } from 'next/server'
import {getFact} from "@/lib/facts";

export const GET = async (request: NextRequest) => {
	const params = request.nextUrl.searchParams;
	const incomingID = params.get('id');
	const parsedID = parseInt(incomingID || '');

	const fact = getFact(parsedID || undefined);

	if (!fact) {
		return new Response("No fact found", {
			status: 404,
		})
	}

	return Response.json({
		data: fact
	})
};