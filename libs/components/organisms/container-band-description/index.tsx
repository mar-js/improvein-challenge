import { IBandD } from '@assets/interfaces'
import { BandDescription } from '@components/molecules'
import { Container } from './styles'

export const ContainerBandDescription: React.FC<IBandD> = ({ band }) => (
  <Container>
    <BandDescription { ...band } />
  </Container>
)
