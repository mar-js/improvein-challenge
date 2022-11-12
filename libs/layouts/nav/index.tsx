import { Logo } from '@components/atoms'
import { NavigationItem } from '@components/molecules'

import { NAVIGATION } from '@assets/data-static'

import { List, NavContainer } from './styles'
import { useAppSelector } from 'hooks/redux'

export const Nav: React.FC = () => {
  const { email } = useAppSelector(state => state.profile)

  return (
    <NavContainer>
      <Logo />
      { email && (
        <List>
          { NAVIGATION.map(item => (
            <NavigationItem key={ item.id } { ...item } />
          )) }
        </List>
      ) }
    </NavContainer>
  )
}
