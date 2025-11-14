import { useQuery, ApolloError } from "@apollo/client";
import { FETCH_TRAVELPRODUCTS } from "@/graphql/queries/product";

interface Seller {
  _id: string;
  name: string;
  picture: string;
}

interface TravelProduct {
  _id: string;
  name: string;
  remarks: string;
  tags: string[];
  pickedCount: number;
  price: number;
  seller: Seller;
  images: string[];
}

interface FetchTravelproductsResponse {
  fetchTravelproducts: TravelProduct[];
}

interface UseFetchTravelproductsVariables {
  isSoldout?: boolean;
  search?: string;
  page?: number;
}

interface UseFetchTravelproductsResult {
  data: FetchTravelproductsResponse | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}

export const useFetchTravelproducts = (
  variables: UseFetchTravelproductsVariables = {}
): UseFetchTravelproductsResult => {
  const { data, loading, error } = useQuery<FetchTravelproductsResponse>(
    FETCH_TRAVELPRODUCTS,
    {
      variables: {
        isSoldout: variables.isSoldout,
        search: variables.search,
        page: variables.page,
      },
    }
  );

  return { data, loading, error };
};

