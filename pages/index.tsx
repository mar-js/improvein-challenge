import { FormLogin } from '@components/molecules'
import { Section } from 'layouts/section'
import { getBands } from 'services/get-bands'
import { GetServerSideProps } from 'next'
import { IBand } from '@assets/interfaces'
import { RootState, WRAPPER } from 'redux/store'
import { connect } from 'react-redux'
import { get_bands } from 'redux/slices/bands'

function Home() {
  return (
    <Section>
      <FormLogin />
    </Section>
  )
}

export const getStaticProps: GetServerSideProps = WRAPPER.getServerSideProps(store => async () => {
  const BANDS = await getBands('bands')

  store.dispatch(get_bands((BANDS as IBand[])))

  return { props: { } }
})

const mapStateToProps = (state: RootState) => ({ bands: state.bands })

export default connect(mapStateToProps)(Home)
