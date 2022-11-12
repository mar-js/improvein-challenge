import { GetServerSideProps } from 'next'

import { connect } from 'react-redux'

import { RootState, WRAPPER } from '@redux/store'
import { get_bands } from '@redux/slices/bands'

import { IBand } from '@assets/interfaces'
import { getBands } from '@services/get-bands'

import { Filters } from '@components/molecules'
import { ContainerCardBand } from '@components/organisms'

function Bands() {
  return (
    <>
      <Filters />
      <ContainerCardBand />
    </>
  )
}

export const getStaticProps: GetServerSideProps = WRAPPER.getServerSideProps(store => async () => {
  const BANDS = await getBands('bands')

  store.dispatch(get_bands((BANDS as IBand[])))

  return { props: { } }
})

const mapStateToProps = (state: RootState) => ({ bands: state.bands })

export default connect(mapStateToProps)(Bands)
