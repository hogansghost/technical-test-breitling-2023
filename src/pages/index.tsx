import { Footer } from '@/components/common/Footer/Footer';
import { HeroCarousel } from '@/components/common/HeroCarousel/HeroCarousel';
import { PageLayout } from '@/components/layout/PageLayout/PageLayout';
import type { NextPage } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Breitling | Swiss Luxury Watches</title>
        <meta name="Breitling | Swiss Luxury Watches" />
        <meta
          name="description"
          content="Breitling - the inventor of the modern chronograph. Swiss craftsmanship since 1884. Explore Breitling's range of watches designed for your air, land and sea pursuits. The New Super Chronomat. Endurance Pro IRONMAN®. The New Premier Heritage."
        />
      </Head>

      <main>
        <PageLayout>
          <PageLayout.Section>
            <HeroCarousel />
          </PageLayout.Section>
        </PageLayout>
      </main>

      <Footer />
    </>
  );
};

export default Home;
