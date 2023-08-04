import { Client, Environment } from "square";

const { catalogApi } = new Client({
	accessToken:
		"EAAAFJLAQwc57X5arZRGsRm9CrE6dVDblTJ10DJU0PXX9QEBTZHoeDt_ewiSSCW3",
	environment: Environment.Production,
});

export default async function handler(req: any, res: any) {
	if (req.method === "POST") {
		const { result } = await catalogApi.searchCatalogItems({
			productTypes: [req.body.productType],
			limit: 9,
		});
		//error TypeError: Do not know how to serialize a BigInt
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
}
