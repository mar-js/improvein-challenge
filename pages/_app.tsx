import type { AppProps } from 'next/app'

import { WRAPPER } from '@redux/store'

import { GlobalStyles } from '@assets/styles'

import { Layout } from '@layouts'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <Component { ...pageProps } />
    </Layout>
  )
}

export default WRAPPER.withRedux(App)
