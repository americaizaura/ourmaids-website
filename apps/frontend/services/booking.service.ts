import {
  RetrieveCatalogObjectResponse,
  SearchAvailabilityResponse,
  SearchCatalogItemsResponse,
} from "square";

/* const API_BASE_URL =
	"https://ourmaids-website-frontend-git-alexis-ocstudios.vercel.app/api"; */
const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_API;

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
