import type { AppProps } from 'next/app'

import { GlobalStyles } from '@assets/styles'
import { Layout } from '@layouts'
import { WRAPPER } from '../libs/redux/store'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <Component { ...pageProps } />
    </Layout>
  )
}

export default WRAPPER.withRedux(App)
