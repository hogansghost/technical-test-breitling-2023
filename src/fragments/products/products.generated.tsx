import * as Types from '../../types';

import { gql } from '@apollo/client';
export type ProductsFragmentFragment = { __typename?: 'ProductCountableConnection', edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', id: string, name: string, pricing?: { __typename?: 'ProductPricingInfo', onSale?: boolean | null, priceRange?: { __typename?: 'TaxedMoneyRange', start?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', amount: number, currency: string } } | null } | null } | null, thumbnail?: { __typename?: 'Image', url: string, alt?: string | null } | null, productType: { __typename?: 'ProductType', id: string } } }> };

export const ProductsFragmentFragmentDoc = gql`
    fragment ProductsFragment on ProductCountableConnection {
  edges {
    node {
      id
      name
      pricing {
        onSale
        priceRange {
          start {
            gross {
              amount
              currency
            }
          }
        }
      }
      thumbnail {
        url
        alt
      }
      productType {
        id
      }
    }
  }
}
    `;