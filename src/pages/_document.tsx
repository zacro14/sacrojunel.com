import Document, { Html, Head, Main, NextScript } from "next/document";

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`;
export const isProd = process.env.NODE_ENV === "production";
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {isProd && (
            <>
              <script async src={gtag} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_ID}', {
              page_path: window.location.pathname,
            });
            `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
