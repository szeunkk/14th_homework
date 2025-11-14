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

export const FETCH_TRAVELPRODUCTS = gql`
  query fetchTravelproducts($isSoldout: Boolean, $search: String, $page: Int) {
    fetchTravelproducts(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      tags
      pickedCount
      price
      seller {
        _id
        name
        picture
      }
      images
    }
  }
`;
