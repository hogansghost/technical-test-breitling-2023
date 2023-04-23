import * as Types from '../../types';

import { gql } from '@apollo/client';
export type ProductCountableConnectionFragment = { __typename: 'ProductCountableConnection', edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', id: string, name: string, description?: any | null, productType: { __typename?: 'ProductType', id: string }, thumbnail?: { __typename?: 'Image', url: string } | null } }> };

export const ProductCountableConnectionFragmentDoc = gql`
    fragment ProductCountableConnection on ProductCountableConnection {
  __typename
  edges {
    node {
      id
      name
      description
      productType {
        id
      }
      thumbnail {
        url
      }
    }
  }
}
    `;