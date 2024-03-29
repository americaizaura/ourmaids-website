import { Client, Environment } from "square";

const { catalogApi } = new Client({
	accessToken: process.env.NEXT_PUBLIC_SQUARE_ACCESS_TOKEN,
	environment: process.env.NEXT_PUBLIC_SQUARE_ENVIRONMENT as Environment,
});

export default async function handler(req: any, res: any) {
	if (req.method === "GET") {
		

		const { result } = await catalogApi.retrieveCatalogObject(
			req.query.objectId
		);

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
