import styled from 'styled-components'

import Link from 'next/link'

export const Anchor = styled(Link)`
  width: 100%;
  text-decoration: none;
`

export const ContainerBandItem = styled.article`
  width: 100%;
  height: 100%;
  padding: 1rem;
  outline: .1rem solid var(--color-purple);
  border-radius: .4rem;

  &:hover {
    outline-width: .2rem;
  }
`

export const Title = styled.h2`
  font-size: 1.8rem;
  text-transform: uppercase;
  color: var(--color-purple);
`

export const SubTitle = styled.h2`
  font-size: 1.4rem;
  color: var(--color-purple);
  margin: .5rem 0;
`

export const Year = styled.h5`
  color: var(--color-green);
  font-size: 1.4rem;
`

export const TitleType = styled.b`
  color: var(--color-green);
`
