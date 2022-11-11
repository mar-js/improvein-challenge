import { IBand } from '@assets/interfaces'
import {
  Div,
  Item,
  List,
  Members,
  Title,
  Year
} from './styles'

export const BandDescription: React.FC<IBand> = ({
  name,
  year,
  members
}) => (
  <Div>
    <Title>{ name }</Title>
    <Year>Year: { year }</Year>
    <Members>Memebers: </Members>
    <List>
      { members.map(({ name }) => (
        <Item key={ name }>{ name }</Item>
      )) }
    </List>
  </Div>
)
