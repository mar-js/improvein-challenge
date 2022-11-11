import { IChildren } from '@assets/interfaces'

import { ContainerSection } from './styles'

export const Section: React.FC<IChildren> = ({ children }) => (
  <ContainerSection>
    { children }
  </ContainerSection>
)
