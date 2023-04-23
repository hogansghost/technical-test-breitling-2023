import { Layout } from '@/components/common/Layout/Layout';
import { usePreserveScroll } from '@/hooks/usePreserveScroll';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import styled, { css, ThemeProvider } from 'styled-components';
import client from '../apollo/client';
import { theme } from '../styles/theme';

const LoadingOverlay = styled.div<{ $loading: boolean }>`
  ${({ $loading }) => css`
    transition: opacity 300ms;
    min-height: 100px;

    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    ${$loading &&
    css`
      opacity: 0.2;
      &::after {
        background: orange;
      }
    `}
  `}
`;

export default function App({ Component, pageProps }: AppProps) {
  const { isTransitioning } = usePreserveScroll();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}></ThemeProvider>
      <LoadingOverlay $loading={isTransitioning}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoadingOverlay>
    </ApolloProvider>
  );
}
