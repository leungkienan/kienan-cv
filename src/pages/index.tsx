import Head from 'next/head'
import { Inter } from 'next/font/google'

import HomePage from './Home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kienan Leung CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}

{
}
