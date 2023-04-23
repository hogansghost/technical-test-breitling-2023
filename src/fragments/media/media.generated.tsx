import * as Types from '../../types';

import { gql } from '@apollo/client';
export type ProductMediaFragment = { __typename: 'ProductMedia', id: string, url: string, type: Types.ProductMediaType };

export const ProductMediaFragmentDoc = gql`
    fragment ProductMedia on ProductMedia {
  __typename
  id
  url
  type
}
    `;