import client from '@/apollo/client';
import { Text } from '@/components/core/Text/Text';
import { PageLayout } from '@/components/layout/PageLayout/PageLayout';
import { HeroDetails } from '@/components/product/HeroDetails/HeroDetails';
import type { KeyFeatureProps } from '@/components/product/KeyFeatures/KeyFeatures';
import { KeyFeatures } from '@/components/product/KeyFeatures/KeyFeatures';
import type { ProductFragmentFragment } from '@/fragments/product/product.generated';
import type { GetProductQuery, GetProductQueryVariables } from '@/queries/getProduct/getProduct.generated';
import { GetProductDocument } from '@/queries/getProduct/getProduct.generated';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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

export const Watch: NextPage<{ watch: ProductFragmentFragment & { features: KeyFeatureProps[] } }> = ({ watch }) => {
  return (
    <PageLayout>
      <Head>
        <title>Breitling | {watch.name}</title>
        <meta name="title" content={watch?.seoTitle ?? watch.name} />
        <meta name="description" content={watch.seoDescription ?? 'A mock short description'} />
      </Head>

      <PageLayout.Section>
        <main>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '32px',
              paddingBlock: '100px',
            }}
          >
            <HeroDetails />

            <div style={{ paddingInline: '64px' }}>
              <h1>Watch {watch?.id}</h1>

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

              <Text preserveWhitespace>
                {/* eslint-disable-next-line @typescript-eslint/quotes */}
                {`I'm baby thundercats neutra williamsburg hot chicken cliche, vaporware bodega boys pitchfork. Distillery squid roof party bitters mukbang. Williamsburg mustache coloring book tilde keffiyeh narwhal hot chicken kombucha cray bruh. Ramps tumeric bodega boys, hexagon seitan street art bespoke. Affogato gluten-free distillery jean shorts, activated charcoal vinyl bespoke. Neutra brunch food truck chartreuse kickstarter. Tofu activated charcoal selfies, YOLO JOMO kogi health goth.\n\nPut a bird on it brunch raw denim intelligentsia chicharrones. Meh hexagon bushwick, mumblecore leggings shoreditch DIY 90's. Readymade same snackwave kitsch four loko synth, iceland chillwave copper mug raclette lyft ennui. Slow-carb gatekeep lo-fi DSA 90's shoreditch heirloom, scenester stumptown narwhal. 3 wolf moon adaptogen schlitz vaporware hoodie pug.`}
              </Text>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '32px',
              paddingBlock: '50px',
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

          <KeyFeatures features={watch.features} />

          <Link href="/">Home</Link>
          <Link href="/watches">Watches</Link>
        </main>
      </PageLayout.Section>
    </PageLayout>
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
