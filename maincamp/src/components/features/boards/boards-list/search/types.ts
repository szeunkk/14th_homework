import {
  FetchBoardsQuery,
  FetchBoardsQueryVariables,
} from "@/commons/graphql/graphql";
import { ApolloQueryResult } from "@apollo/client";

export interface ISearchBar {
  endDate: string;
  startDate: string;
  search: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  refetch: (
    variables?: Partial<FetchBoardsQueryVariables>
  ) => Promise<ApolloQueryResult<FetchBoardsQuery>>;
}
