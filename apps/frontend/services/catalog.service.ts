import {
  RetrieveCatalogObjectResponse,
  SearchCatalogItemsResponse,
} from "square";
enum CatalogItemProductType {
  AppointmentsService = "APPOINTMENTS_SERVICE",
  Regular = "REGULAR",
}

const API_BASE_URL = typeof window === "undefined" ? process.env.NEXT_PUBLIC_SERVER_API : window.location.origin + "/api";
class CatalogService {
  async fetchCatalogItems(
    productType: CatalogItemProductType,
    limit?: number,
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
