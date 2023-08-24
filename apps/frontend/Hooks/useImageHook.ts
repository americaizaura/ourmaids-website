import { useEffect, useState } from "react";
import ImagesService from "../services/images.service";
import { CatalogItemProductType } from "../gql/graphql";
import { ListCatalogResponse, SearchCatalogItemsResponse } from "square";
const useImageHook = (
    
) => {
	const [data, setData] = useState({} as ListCatalogResponse | null);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await ImagesService.fetchImages();
				setData(data);
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		};

		fetchData();
	}, []);

	return {
		data,
		loading,
		error,
	};
};

export default useImageHook;
