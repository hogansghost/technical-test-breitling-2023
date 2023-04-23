import * as Types from '../../types';

import { gql } from '@apollo/client';
import { WatchFragmentDoc } from '../watch/watch.generated';
export type ProductsFragment = { __typename?: 'ProductCountableConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', id: string, name: string, description?: any | null, productType: { __typename?: 'ProductType', id: string }, thumbnail?: { __typename?: 'Image', alt?: string | null, url: string } | null, media?: Array<{ __typename?: 'ProductMedia', id: string, url: string, type: Types.ProductMediaType }> | null } }> };

export const ProductsFragmentDoc = gql`
    fragment Products on ProductCountableConnection {
  pageInfo {
    endCursor
    hasPreviousPage
  }
  edges {
    node {
      productType {
        id
      }
      thumbnail {
        alt
        url
      }
      ...Watch
    }
  }
}
    ${WatchFragmentDoc}`;