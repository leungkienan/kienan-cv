import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Nav from './Nav'
import Footer from './Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
