import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetProductsQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars['String']>;
  filterSearch?: Types.InputMaybe<Types.Scalars['String']>;
  filterType?: Types.InputMaybe<Array<Types.Scalars['ID']> | Types.Scalars['ID']>;
}>;


export type GetProductsQuery = { __typename?: 'Query', products?: { __typename?: 'ProductCountableConnection', edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', id: string, name: string, pricing?: { __typename?: 'ProductPricingInfo', onSale?: boolean | null, priceRange?: { __typename?: 'TaxedMoneyRange', start?: { __typename?: 'TaxedMoney', gross: { __typename?: 'Money', amount: number, currency: string } } | null } | null } | null, thumbnail?: { __typename?: 'Image', url: string, alt?: string | null } | null, productType: { __typename?: 'ProductType', id: string } } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } | null };


export const GetProductsDocument = gql`
    query GetProducts($after: String, $filterSearch: String, $filterType: [ID!]) {
  products(
    first: 12
    after: $after
    channel: "default-channel"
    filter: {search: $filterSearch, productTypes: $filterType}
    sortBy: {field: MINIMAL_PRICE, direction: ASC}
  ) {
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
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      filterSearch: // value for 'filterSearch'
 *      filterType: // value for 'filterType'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;