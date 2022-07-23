import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='description' content="Vincenzo Marconi's Personal Site" />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon/favicon-16x16.png'
          />
          <link rel='manifest' href='/favicon/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/favicon/safari-pinned-tab.svg'
            color='#ec4747'
          />
          <meta name='msapplication-TileColor' content='#eeeeee' />
          <meta name='theme-color' content='#ffffff' />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=optional'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
