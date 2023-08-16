import {
	RetrieveCatalogObjectResponse,
	SearchAvailabilityResponse,
	SearchCatalogItemsResponse,
} from "square";
import { CatalogItemProductType } from "../gql/graphql";
/*  const API_BASE_URL =
	"https://ourmaids-website-frontend-git-alexis-ocstudios.vercel.app/api";  */
const API_BASE_URL = "http://localhost:3000/api";
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
