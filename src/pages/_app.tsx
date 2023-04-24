import { LoadingOverlay } from '@/components/core/LoadingOverlay/LoadingOverlay';
import { AppLayout } from '@/components/layout/AppLayout/AppLayout';
import { usePreserveScroll } from '@/hooks/usePreserveScroll';
import { GlobalStyles } from '@/styles/global';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import client from '../apollo/client';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const { isTransitioning } = usePreserveScroll();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <LoadingOverlay isLoading={isTransitioning}>
          <AppLayout>
            <GlobalStyles />

            <Component {...pageProps} />
          </AppLayout>
        </LoadingOverlay>
      </ThemeProvider>
    </ApolloProvider>
  );
}
