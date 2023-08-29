import { Client, Environment } from "square";

const { catalogApi } = new Client({
  accessToken:
    "EAAAEFHgE_JY5r7dECm_Av7WFV-brJ_8M6hbH2VvVETOrdyoDifPYYEF7xMVWZVK",
  environment: Environment.Production,
});

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    const { result } = await catalogApi.listCatalog(undefined, "IMAGE");

    const resultSerialize = toObject(result);
    /* console.log(resultSerialize);
     */
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
