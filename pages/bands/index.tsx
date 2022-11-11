import { Filters } from '@components/molecules'

import { getBands } from 'services/get-bands'
import { ContainerCardBand } from '@components/organisms'
import { GetServerSideProps } from 'next'
import { IBand, IBandP } from '@assets/interfaces'
import { RootState, WRAPPER } from 'redux/store'
import { connect } from 'react-redux'
import { get_bands } from 'redux/slices/bands'

function Bands({ bands }: IBandP) {
  return (
    <>
      <Filters />
      <ContainerCardBand bands={ bands } />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = WRAPPER.getServerSideProps(store => async () => {
  const BANDS = await getBands('bands')

  store.dispatch(get_bands((BANDS as IBand[])))

  return { props: { } }
})

const mapStateToProps = (state: RootState) => ({ bands: state.bands })

export default connect(mapStateToProps)(Bands)
