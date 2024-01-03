import {
  RetrieveCatalogObjectResponse,
  SearchAvailabilityResponse,
  SearchCatalogItemsResponse,
} from "square";

const API_BASE_URL = typeof window === "undefined" ? process.env.NEXT_PUBLIC_SERVER_API : window.location.origin + "/api";

class BookingService {
  async fecthSearchAvailabilityBooking(
    startAt: string,
    endAt: string,
    serviceVariationId: string
  ): Promise<SearchAvailabilityResponse | null> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/searchAvailabilityBooking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            startAt,
            endAt,
            serviceVariationId,
          }),
        }
      );
      return response.json();
    } catch (error) {
      console.error("Error fetching catalog items:", error);
      return null;
    }
  }
}

export default new BookingService();
