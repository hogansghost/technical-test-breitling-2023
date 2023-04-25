import { SearchInput } from '@/components/SearchInput/SearchInput';
import { ProductListGrid } from '@/components/common/products/ProductListGrid/ProductListGrid';
import { LoadingOverlay } from '@/components/core/LoadingOverlay/LoadingOverlay';
import { FilterBar } from '@/components/layout/FilterBar/FilterBar';
import { PageLayout } from '@/components/layout/PageLayout/PageLayout';
import { useGetProductsQuery } from '@/queries/getProducts/getProducts.generated';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export const Watches: NextPage = () => {
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string[]>([]);

  const {
    data,
    loading: dataLoading,
    refetch,
    fetchMore,
  } = useGetProductsQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      filterSearch: search,
    },
  });

  const handleLoadMoreClick = useCallback(async () => {
    try {
      await fetchMore({
        variables: {
          after: data?.products?.pageInfo?.endCursor,
        },
      });
    } catch (err) {
      console.error('Fetching More products failed.');
    }
  }, [fetchMore, data?.products?.pageInfo?.endCursor]);

  const handleSearchChange = async (value: string) => {
    // TODO: create a util to spread filters so we don't lose other values.
    await router.replace(
      {
        query: {
          ...(value ? { search: encodeURIComponent(value) } : {}),
          ...(!!filter.length ? { filter: encodeURIComponent(filter.join(',')) } : {}),
        },
      },
      undefined,
      { shallow: true }
    );

    setSearch(value);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    refetch({
      after: null,
      filterSearch: search,
      filterType: filter,
    });
  }, [search, filter, refetch]);

  // TODO: Hook and logic to allow deep linking with filters, etc. but skips subsequent loads.
  useEffect(() => {
    if (router?.query?.search && typeof router?.query?.search === 'string') {
      setSearch(decodeURIComponent(router?.query?.search) ?? null);
    }

    if (router?.query?.filter && typeof router?.query?.filter === 'string') {
      setFilter([decodeURIComponent(router?.query?.filter)] ?? null);
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Breitling | Buy the Breitling Watch collection</title>
        <meta name="title" content="Buy the Breitling Watch collection" />
        <meta name="description" content="Find your perfect match, etc. etc." />
      </Head>

      <main>
        <PageLayout>
          <PageLayout.Section fullWidth>
            <FilterBar>
              <FilterBar.PrimaryActions>
                <button
                  onClick={() => {
                    setFilter((current) => (current.length ? [] : ['UHJvZHVjdFR5cGU6MTc=']));
                  }}
                >
                  Audiobooks
                </button>
                <button
                  onClick={() => {
                    setFilter((current) => (current.length ? [] : ['UHJvZHVjdFR5cGU6MjE=']));
                  }}
                >
                  Beanies & Scarfs
                </button>
                <button
                  onClick={() => {
                    setFilter((current) => (current.length ? [] : ['UHJvZHVjdFR5cGU6MjU=', 'UHJvZHVjdFR5cGU6MjE=']));
                  }}
                >
                  Multiple filters
                </button>
              </FilterBar.PrimaryActions>

              <FilterBar.SecondaryActions>
                <SearchInput onSearchChange={handleSearchChange} />
              </FilterBar.SecondaryActions>
            </FilterBar>
          </PageLayout.Section>

          <PageLayout.Section>
            <LoadingOverlay isLoading={dataLoading}>
              {!data?.products?.edges?.length && !!search && !dataLoading && (
                <h1>No results found for &quot;{search}&quot;</h1>
              )}

              {!!data?.products?.edges?.length && (
                <ProductListGrid
                  products={data.products.edges}
                  hasNextPage={data?.products?.pageInfo?.hasNextPage}
                  isFetching={dataLoading}
                  onLoadNextPage={handleLoadMoreClick}
                />
              )}
            </LoadingOverlay>
          </PageLayout.Section>

          <PageLayout.Section>
            <Link href="/">Home</Link>
          </PageLayout.Section>
        </PageLayout>
      </main>
    </>
  );
};

export default Watches;
