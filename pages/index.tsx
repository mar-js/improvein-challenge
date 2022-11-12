import { GetServerSideProps } from 'next'

import { connect } from 'react-redux'

import { RootState, WRAPPER } from '@redux/store'
import { get_bands } from '@redux/slices/bands'

import { IBand } from '@assets/interfaces'
import { getBands } from '@services/get-bands'

import { FormLogin } from '@components/molecules'
import { Section } from '@layouts/section'

function Home() {
  return (
    <Section>
      <FormLogin />
    </Section>
  )
}

export const getServerSideProps: GetServerSideProps = WRAPPER.getServerSideProps(store => async () => {
  const BANDS = await getBands('bands')

  store.dispatch(get_bands((BANDS as IBand[])))

  return { props: { } }
})

const mapStateToProps = (state: RootState) => ({ bands: state.bands })

export default connect(mapStateToProps)(Home)
