import {
	RetrieveCatalogObjectResponse,
	SearchCatalogItemsResponse,
} from "square";
import { CatalogItemProductType } from "../gql/graphql";
/* const API_BASE_URL =
	"https://ourmaids-website-frontend-git-alexis-ocstudios.vercel.app/api"; */
const API_BASE_URL =
	"http://localhost:3000/api";
class CatalogService {
	async fetchCatalogItems(
		productType: CatalogItemProductType,
		limit: number,
		cursor?: string
	): Promise<SearchCatalogItemsResponse | null> {
		try {
			const response = await fetch(`${API_BASE_URL}/catalog`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					productType: productType,
					limit: limit,
					cursor: cursor,
				}),
			});
			return await response.json();
		} catch (error) {
			console.error("Error fetching catalog items:", error);
			return null;
		}
	}

	async retrieveCatalogObject(
		objectId: string
	): Promise<RetrieveCatalogObjectResponse | null> {
		try {
			const response = await fetch(
				`${API_BASE_URL}/retrieveCatalog?objectId=${objectId}`,
				{
					method: "GET",
					headers: {
						"Content-type": "application/json",
					},
				}
			);
			return await response.json();
		} catch (error) {
			console.error("Error fetching catalog items:", error);
			return null;
		}
	}
}

export default new CatalogService();
