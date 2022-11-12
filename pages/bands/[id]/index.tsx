import { GetServerSideProps } from 'next'

import { connect } from 'react-redux'

import { RootState, WRAPPER } from '@redux/store'
import { get_band } from '@redux/slices/band'

import { IBand, IBandD, IParams } from '@assets/interfaces'
import { getBands } from '@services/get-bands'

import { Section } from '@layouts/section'
import { ContainerBandDescription } from '@components/organisms'

function Band({ band }: IBandD) {
  return (
    <Section>
      <ContainerBandDescription band={ band } />
    </Section>
  )
}

export const getServerSideProps: GetServerSideProps = WRAPPER.getServerSideProps(store => async ({ params }) => {
  const { id } = (params as unknown as IParams)
  const BAND = await getBands(`bands/${id}`)

  store.dispatch(get_band((BAND as IBand)))

  return { props: { } }
})

const mapStateToProps = (state: RootState) => ({ band: state.band })

export default connect(mapStateToProps)(Band)
