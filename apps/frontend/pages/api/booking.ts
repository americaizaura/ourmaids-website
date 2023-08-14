/* import { Client, Environment } from "square";

const { bookingsApi } = new Client({
	accessToken:
		"EAAAFJLAQwc57X5arZRGsRm9CrE6dVDblTJ10DJU0PXX9QEBTZHoeDt_ewiSSCW3",
	environment: Environment.Production,
});

export default async function handler(req: any, res: any) {
	
	if (req.method === "POST") {
		const { result } = await bookingsApi.createBooking({
			productTypes: [req.body.productType],
			limit: req.body.limit,
			cursor: req.body.cursor,
		});
		
		const resultSerialize = toObject(result);

		res.status(200).json(resultSerialize);
	} else {
		res.status(500).send();
	}
}

function toObject(obj) {
	return JSON.parse(
		JSON.stringify(
			obj,
			(key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
		)
	);
} */
