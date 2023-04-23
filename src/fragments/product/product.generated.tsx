import * as Types from '../../types';

import { gql } from '@apollo/client';
import { ProductMediaFragmentDoc } from '../media/media.generated';
export type ProductFragment = { __typename: 'Product', id: string, name: string, description?: any | null, media?: Array<{ __typename: 'ProductMedia', id: string, url: string, type: Types.ProductMediaType }> | null };

export const ProductFragmentDoc = gql`
    fragment Product on Product {
  __typename
  id
  name
  description
  media {
    ...ProductMedia
  }
}
    ${ProductMediaFragmentDoc}`;