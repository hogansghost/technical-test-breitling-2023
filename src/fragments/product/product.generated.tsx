import * as Types from '../../types';

import { gql } from '@apollo/client';
import { ProductMediaFragmentFragmentDoc } from '../media/media.generated';
export type ProductFragmentFragment = { __typename: 'Product', id: string, name: string, description?: any | null, media?: Array<{ __typename: 'ProductMedia', id: string, url: string, type: Types.ProductMediaType }> | null };

export const ProductFragmentFragmentDoc = gql`
    fragment ProductFragment on Product {
  __typename
  id
  name
  description
  media {
    ...ProductMediaFragment
  }
}
    ${ProductMediaFragmentFragmentDoc}`;