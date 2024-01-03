import { ListCatalogResponse, Payment } from "square";
const API_BASE_URL = typeof window === "undefined" ? process.env.NEXT_PUBLIC_SERVER_API : window.location.origin + "/api";
class PaymentService {
  async createPayment(
    sourceId: string,
    amountMoney: {
      amount: number;
      currency: string;
    },
    buyerEmailAddress: string
  ): Promise<any | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/createPayment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sourceId,
          amountMoney,

          buyerEmailAddress,
        }),
      });
      return await response.json();
    } catch (error) {
      console.error("Error fetching images:", error);
      return null;
    }
  }
}

export default new PaymentService();
