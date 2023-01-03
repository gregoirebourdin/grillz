import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className=" h-screen">

        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Grillz sur-mesure (bijoux dentaires Sur Mesure & amovibles) livré partout en France ! 🇫🇷"/>
            <title>Your Grillz</title>
        </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
