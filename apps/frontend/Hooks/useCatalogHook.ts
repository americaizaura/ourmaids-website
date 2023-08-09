import { useEffect, useState } from "react";
import CatalogService from "../services/catalog.service";
import { CatalogItemProductType } from "../gql/graphql";
import { SearchCatalogItemsResponse } from "square";
const useCatalogHook = (
    productType: CatalogItemProductType,
    limit: number,
    cursor?: string
) => {
	const [data, setData] = useState({} as SearchCatalogItemsResponse | null);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await CatalogService.fetchCatalogItems(
                    productType,
                    limit,
                    cursor
				);
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

export default useCatalogHook;
