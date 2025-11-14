import { gql } from "@apollo/client";

export const FETCH_TRAVELPRODUCTS_OF_THE_BEST = gql`
  query {
    fetchTravelproductsOfTheBest {
      _id
      name
      remarks
      price
      pickedCount
      images
    }
  }
`;
