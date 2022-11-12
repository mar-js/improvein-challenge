import { Logo } from '@components/atoms'
import { NavigationItem } from '@components/molecules'

import { NAVIGATION } from '@assets/data-static'

import { List, NavContainer } from './styles'
import { useRouter } from 'next/router'

export const Nav: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <NavContainer>
      <Logo />
      { pathname !== '/' && (
        <List>
          { NAVIGATION.map(item => (
            <NavigationItem key={ item.id } { ...item } />
          )) }
        </List>
      ) }
    </NavContainer>
  )
}
