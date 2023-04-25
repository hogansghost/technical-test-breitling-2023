import * as Types from '../../types';

import { gql } from '@apollo/client';
import { ProductMediaFragmentFragmentDoc } from '../media/media.generated';
export type ProductFragmentFragment = { __typename: 'Product', id: string, name: string, description?: any | null, seoTitle?: string | null, seoDescription?: string | null, pricing?: { __typename?: 'ProductPricingInfo', onSale?: boolean | null, priceRange?: { __typename?: 'TaxedMoneyRange', start?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', amount: number, currency: string } } | null } | null } | null, media?: Array<{ __typename: 'ProductMedia', id: string, url: string, type: Types.ProductMediaType }> | null };

export const ProductFragmentFragmentDoc = gql`
    fragment ProductFragment on Product {
  __typename
  id
  name
  description
  seoTitle
  seoDescription
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
  media {
    ...ProductMediaFragment
  }
}
    ${ProductMediaFragmentFragmentDoc}`;