import { Client, Environment } from "square";

const { bookingsApi } = new Client({
	accessToken:
		"EAAAFJLAQwc57X5arZRGsRm9CrE6dVDblTJ10DJU0PXX9QEBTZHoeDt_ewiSSCW3",
	environment: Environment.Production,
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
		res.status(500).send(
			"Sorry, we only accept POST requests at this endpoint."
		);
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
