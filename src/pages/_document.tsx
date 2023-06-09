import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

const CustomDocument = () => (
  <Html lang="en">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

CustomDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    };
  } finally {
    sheet.seal();
  }
};

export default CustomDocument;
