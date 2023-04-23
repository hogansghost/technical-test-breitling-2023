import * as Types from '../../types';

import { gql } from '@apollo/client';
import { ProductsFragmentDoc } from '../../fragments/watches/watches.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetWatchesQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars['String']>;
  filterSearch?: Types.InputMaybe<Types.Scalars['String']>;
  filterType?: Types.InputMaybe<Array<Types.Scalars['ID']> | Types.Scalars['ID']>;
}>;


export type GetWatchesQuery = { __typename?: 'Query', products?: { __typename?: 'ProductCountableConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'ProductCountableEdge', node: { __typename?: 'Product', id: string, name: string, description?: any | null, productType: { __typename?: 'ProductType', id: string }, thumbnail?: { __typename?: 'Image', alt?: string | null, url: string } | null, media?: Array<{ __typename?: 'ProductMedia', id: string, url: string, type: Types.ProductMediaType }> | null } }> } | null };


export const GetWatchesDocument = gql`
    query getWatches($after: String, $filterSearch: String, $filterType: [ID!]) {
  products(
    first: 10
    after: $after
    channel: "default-channel"
    filter: {search: $filterSearch, productTypes: $filterType}
    sortBy: {field: MINIMAL_PRICE, direction: ASC}
  ) {
    ...Products
  }
}
    ${ProductsFragmentDoc}`;

/**
 * __useGetWatchesQuery__
 *
 * To run a query within a React component, call `useGetWatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWatchesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      filterSearch: // value for 'filterSearch'
 *      filterType: // value for 'filterType'
 *   },
 * });
 */
export function useGetWatchesQuery(baseOptions?: Apollo.QueryHookOptions<GetWatchesQuery, GetWatchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWatchesQuery, GetWatchesQueryVariables>(GetWatchesDocument, options);
      }
export function useGetWatchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWatchesQuery, GetWatchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWatchesQuery, GetWatchesQueryVariables>(GetWatchesDocument, options);
        }
export type GetWatchesQueryHookResult = ReturnType<typeof useGetWatchesQuery>;
export type GetWatchesLazyQueryHookResult = ReturnType<typeof useGetWatchesLazyQuery>;
export type GetWatchesQueryResult = Apollo.QueryResult<GetWatchesQuery, GetWatchesQueryVariables>;