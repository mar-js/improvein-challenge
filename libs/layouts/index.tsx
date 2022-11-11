import { IChildren } from '@assets/interfaces'

import { Header } from './header'
import { Main } from './main'

export const Layout: React.FC<IChildren> = ({ children }) => (
  <>
    <Header />
    <Main>
      { children }
    </Main>
  </>
)
