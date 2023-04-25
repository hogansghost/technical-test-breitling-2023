import client from '@/apollo/client';
import { Footer } from '@/components/common/Footer/Footer';
import { Button } from '@/components/core/Button/Button.styles';
import { Text } from '@/components/core/Text/Text';
import { PageLayout } from '@/components/layout/PageLayout/PageLayout';
import { HeroDetails } from '@/components/product/HeroDetails/HeroDetails';
import type { KeyFeatureProps } from '@/components/product/KeyFeatures/KeyFeatures';
import { KeyFeatures } from '@/components/product/KeyFeatures/KeyFeatures';
import { ProductHeroArea } from '@/components/product/ProductHeroArea/ProductHeroArea';
import type { ProductFragmentFragment } from '@/fragments/product/product.generated';
import type { GetProductQuery, GetProductQueryVariables } from '@/queries/getProduct/getProduct.generated';
import { GetProductDocument } from '@/queries/getProduct/getProduct.generated';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const features: KeyFeatureProps[] = [
  {
    id: '001',
    type: 'IP_RATING',
    label: 'Case material',
    value: 'Stainless steel',
  },
  {
    id: '002',
    type: 'DIAMETER',
    label: 'Water resistance',
    value: '10 bars i',
  },
  {
    id: '003',
    type: 'THICKNESS',
    label: 'Diameter',
    value: '41.0 mm',
  },
  {
    id: '004',
    type: 'WEIGHT',
    label: 'Thickness',
    value: '13.3 mm mm',
  },
  {
    id: '005',
    type: 'BATTERY_LIFE',
    label: 'Product Weight (Approx.)',
    value: '99.0 g.',
  },
  {
    id: '006',
    type: 'MATERIAL',
    label: 'Power reserve',
    value: 'Approx. 70 hrs',
  },
];

// TODO: abstract all this optional chaining into hooks to make this component more readable.
// e.g.
// useWatchDetails({ watch }) => ({ heroImage: watch?.media?.[0]?.type === 'IMAGE' ?? null, name: watch?.name })
export const Watch: NextPage<{ watch: ProductFragmentFragment & { features: KeyFeatureProps[] } }> = ({ watch }) => {
  const handleAddToBagClick = () => {
    alert('This feature is not yet implemented');
  };

  return (
    <>
      <Head>
        <title>Breitling | {watch.name}</title>
        <meta name="title" content={watch?.seoTitle ?? watch.name} />
        <meta name="description" content={watch.seoDescription ?? 'A mock short description'} />
      </Head>

      <main>
        <PageLayout>
          <PageLayout.Section>
            <ProductHeroArea>
              <HeroDetails />

              {/* TODO: Component */}
              <div style={{ width: '500px', maxWidth: '100%', marginInline: 'auto', textAlign: 'center' }}>
                {watch?.media?.[0]?.type === 'IMAGE' && (
                  <div
                    key={watch?.media?.[0].id}
                    style={{
                      position: 'relative',
                      aspectRatio: '1 / 1',
                    }}
                  >
                    <Image priority key={watch?.media?.[0].id} alt="" src={watch?.media?.[0].url ?? ''} fill sizes="" />
                  </div>
                )}

                <div
                  style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '16px', paddingBlock: '32px' }}
                >
                  <Text size="small">{watch?.id}</Text>
                  <Text size="large" weight="semiBold">
                    {watch?.name}
                  </Text>
                  <Text size="small" weight="semiBold">
                    {/* TODO: Make price component */}
                    {new Intl.NumberFormat('en-GB', {
                      style: 'currency',
                      currency: watch?.pricing?.priceRange?.start?.gross?.currency ?? 'USD',
                    }).format(watch?.pricing?.priceRange?.start?.gross?.amount ?? 0)}
                  </Text>

                  <div style={{ display: 'flex', justifyContent: 'center', paddingBlockStart: '32px' }}>
                    <Button onClick={handleAddToBagClick}>Add to Bag</Button>
                  </div>
                </div>
              </div>
            </ProductHeroArea>
          </PageLayout.Section>

          <PageLayout.Divider />

          <PageLayout.Section>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(450px, 100%), 1fr))',
                gap: '32px',
              }}
            >
              {watch?.media?.map(
                (media) =>
                  media.type === 'IMAGE' && (
                    <div
                      key={media.id}
                      style={{
                        position: 'relative',
                        aspectRatio: '1 / 1',
                      }}
                    >
                      <Image priority key={media.id} alt="" src={media.url ?? ''} fill sizes="" />
                    </div>
                  )
              )}
            </div>
          </PageLayout.Section>

          <PageLayout.Divider />

          <PageLayout.Section>
            <KeyFeatures features={watch.features} />
          </PageLayout.Section>
        </PageLayout>
      </main>

      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Empty paths as there are thousands of products so we'll generate on first access.
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // We know the ID is the first segment when split.
  const watchId = (params?.watchId as string)?.split('-')[0];

  try {
    const { data, errors } = await client.query<GetProductQuery, GetProductQueryVariables>({
      query: GetProductDocument,
      variables: {
        id: watchId,
      },
    });

    // TODO: Setup eslint properly later
    if (!!errors?.length) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        watch: {
          ...data.product,
          // These would come from API.
          features,
        },
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Watch;
