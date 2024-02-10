import type { AppProps } from 'next/app'
require('mocks');

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}