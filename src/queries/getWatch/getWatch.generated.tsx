import * as Types from '../../types';

import { gql } from '@apollo/client';
import { WatchFragmentDoc } from '../../fragments/watch/watch.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetWatchQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type GetWatchQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, description?: any | null, media?: Array<{ __typename?: 'ProductMedia', id: string, url: string, type: Types.ProductMediaType }> | null } | null };


export const GetWatchDocument = gql`
    query GetWatch($id: ID) {
  product(id: $id, channel: "default-channel") {
    ...Watch
  }
}
    ${WatchFragmentDoc}`;

/**
 * __useGetWatchQuery__
 *
 * To run a query within a React component, call `useGetWatchQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWatchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWatchQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWatchQuery(baseOptions?: Apollo.QueryHookOptions<GetWatchQuery, GetWatchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWatchQuery, GetWatchQueryVariables>(GetWatchDocument, options);
      }
export function useGetWatchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWatchQuery, GetWatchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWatchQuery, GetWatchQueryVariables>(GetWatchDocument, options);
        }
export type GetWatchQueryHookResult = ReturnType<typeof useGetWatchQuery>;
export type GetWatchLazyQueryHookResult = ReturnType<typeof useGetWatchLazyQuery>;
export type GetWatchQueryResult = Apollo.QueryResult<GetWatchQuery, GetWatchQueryVariables>;