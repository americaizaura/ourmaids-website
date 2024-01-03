import { ListCatalogResponse } from "square";
const API_BASE_URL = typeof window === "undefined" ? process.env.NEXT_PUBLIC_SERVER_API : window.location.origin + "/api";
class ImagesService {
  async fetchImages(): Promise<ListCatalogResponse | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/image`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching images:", error);
      return null;
    }
  }
}

export default new ImagesService();
