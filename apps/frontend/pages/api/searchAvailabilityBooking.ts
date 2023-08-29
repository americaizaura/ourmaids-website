import { Client, Environment } from "square";

const { bookingsApi } = new Client({
	accessToken: process.env.NEXT_PUBLIC_SQUARE_ACCESS_TOKEN,
	environment: process.env.NEXT_PUBLIC_SQUARE_ENVIRONMENT as Environment,
});

export default async function handler(req: any, res: any) {
	if (req.method === "POST") {
		const { result } = await bookingsApi.searchAvailability({
			query: {
				filter: {
					startAtRange: {
						startAt: req.body.startAt,
						endAt: req.body.endAt,
					},
					locationId: "LMSWYMNRM3N66",
					segmentFilters: [
						{
							serviceVariationId: req.body.serviceVariationId,
						},
					],
				},
			},
		});

		const resultSerialize = toObject(result);

		res.status(200).json(resultSerialize);
	} else {
		res
			.status(500)
			.send("Sorry, we only accept POST requests at this endpoint.");
	}
}

function toObject(obj) {
	return JSON.parse(
		JSON.stringify(
			obj,
			(key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
		)
	);
}
