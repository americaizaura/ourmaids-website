import { Client, Environment } from "square";

const { paymentsApi } = new Client({
  accessToken:
    "EAAAEFHgE_JY5r7dECm_Av7WFV-brJ_8M6hbH2VvVETOrdyoDifPYYEF7xMVWZVK",
  environment: Environment.Production,
});
import { randomUUID } from "crypto";
export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        amount: req.body.amountMoney.amount,
        currency: req.body.amountMoney.currency,
      },
      buyerEmailAddress: req.body.buyerEmailAddress,
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
}