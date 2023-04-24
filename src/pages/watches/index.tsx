import { SearchInput } from '@/components/SearchInput/SearchInput';
import { WatchCard } from '@/components/common/products/WatchCard/WatchCard';
import { LoadingOverlay } from '@/components/core/LoadingOverlay/LoadingOverlay';
import { FilterBar } from '@/components/layout/FilterBar/FilterBar';
import { useGetProductsQuery } from '@/queries/getProducts/getProducts.generated';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { WatchesCardGrid } from '../../components/product/Index.styles';

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

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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

    // refetch({
    //   after: null,
    //   filterSearch: value,
    //   filterType: filter,
    // });
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    refetch({
      filterSearch: search,
      filterType: filter,
    });
  }, [search, filter, refetch]);

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
        <title>Watches</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FilterBar>
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
            Both
          </button>
          <SearchInput onSearchChange={handleSearchChange} />
        </FilterBar>

        <LoadingOverlay isLoading={dataLoading}>
          {!!data?.products?.edges?.length && (
            <div style={{ width: '1400px', maxWidth: '100%', margin: 'auto' }}>
              <WatchesCardGrid>
                {data.products.edges.map(({ node: product }) => (
                  <WatchCard
                    key={product.id}
                    id={product.id}
                    url={`/watches/${product.id}-${product.slug}`}
                    thumbnail={product?.thumbnail}
                    name={product?.name}
                    pricing={product?.pricing}
                  />
                ))}
              </WatchesCardGrid>

              <div style={{ padding: '32px' }}>
                <button
                  type="button"
                  disabled={!data?.products?.pageInfo?.hasNextPage ?? true}
                  onClick={handleLoadMoreClick}
                >
                  Load more
                </button>
              </div>
            </div>
          )}
        </LoadingOverlay>

        <Link href="/">Home</Link>
      </main>
    </>
  );
};

export default Watches;
