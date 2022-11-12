import { useRouter } from 'next/router'

import { IBandD } from '@assets/interfaces'

import { BandDescription } from '@components/molecules'

import { Button, Container } from './styles'

export const ContainerBandDescription: React.FC<IBandD> = ({ band }) => {
  const { back } = useRouter()

  return (
    <Container>
      <Button onClick={ back } type="button">Back</Button>
      <BandDescription { ...band } />
    </Container>
  )
}
