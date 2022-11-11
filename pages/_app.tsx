import type { AppProps } from 'next/app'
import { GlobalStyles } from '../libs/assets/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component { ...pageProps } />
    </>
  )
}
