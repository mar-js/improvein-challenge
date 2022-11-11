import { Logo } from '@components/atoms'
import { NavigationItem } from '@components/molecules'

import { NAVIGATION } from '@assets/data-static'

import { List, NavContainer } from './styles'

export const Nav: React.FC = () => (
  <NavContainer>
    <Logo />
    <List>
      { NAVIGATION.map(item => (
        <NavigationItem key={ item.id } { ...item } />
      )) }
    </List>
  </NavContainer>
)
