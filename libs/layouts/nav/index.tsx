import { useRouter } from 'next/router'

import { NAVIGATION } from '@assets/data-static'

import { Logo } from '@components/atoms'
import { NavigationItem } from '@components/molecules'

import { List, NavContainer } from './styles'

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
