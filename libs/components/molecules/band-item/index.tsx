import { IBand } from '@assets/interfaces'
import {
  Anchor,
  ContainerBandItem,
  Title,
  SubTitle,
  Year,
  TitleType
} from './styles'

export const BandItem: React.FC<IBand> = ({
  id,
  name,
  genreCode,
  year
}) => {

  return (
    <Anchor href={ `bands/${id}` } >
      <ContainerBandItem>
        <Title>{ name }</Title>
        <SubTitle>
          <TitleType>Genre: </TitleType>
          { genreCode }
        </SubTitle>
        <Year>
          <TitleType>Year: </TitleType>
          { year }
        </Year>
      </ContainerBandItem>
    </Anchor>
  )
}
