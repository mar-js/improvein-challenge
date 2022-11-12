import { useRouter } from 'next/router'

import { IBandD } from '@assets/interfaces'

import { BandDescription } from '@components/molecules'

import { Container } from './styles'

export const ContainerBandDescription: React.FC<IBandD> = ({ band }) => {
  const { back } = useRouter()

  return (
    <Container>
      <button onClick={ back } type="button">Back</button>
      <BandDescription { ...band } />
    </Container>
  )
}
