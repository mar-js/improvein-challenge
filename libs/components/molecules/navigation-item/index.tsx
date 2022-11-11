import { INavigation } from '@assets/interfaces'

import { Anchor, Item } from './styles'

export const NavigationItem: React.FC<INavigation> = ({ name, url }) => (
  <Item>
    <Anchor href={ url }>{ name }</Anchor>
  </Item>
)
