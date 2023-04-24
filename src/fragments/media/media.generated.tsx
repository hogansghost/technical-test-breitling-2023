import * as Types from '../../types';

import { gql } from '@apollo/client';
export type ProductMediaFragmentFragment = { __typename: 'ProductMedia', id: string, url: string, type: Types.ProductMediaType };

export const ProductMediaFragmentFragmentDoc = gql`
    fragment ProductMediaFragment on ProductMedia {
  __typename
  id
  url
  type
}
    `;