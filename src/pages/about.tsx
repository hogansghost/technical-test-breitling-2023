import { Text } from '@/components/core/Text/Text';
import { PageLayout } from '@/components/layout/PageLayout/PageLayout';
import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Breitling | About</title>
        <meta name="Breitling | About" />
        <meta
          name="description"
          content="Breitling - the inventor of the modern chronograph. Swiss craftsmanship since 1884. Explore Breitling's range of watches designed for your air, land and sea pursuits. The New Super Chronomat. Endurance Pro IRONMAN®. The New Premier Heritage."
        />
      </Head>

      <main>
        <PageLayout>
          <PageLayout.Section>
            <Text>An about page</Text>
          </PageLayout.Section>
        </PageLayout>
      </main>
    </>
  );
};

export default About;
