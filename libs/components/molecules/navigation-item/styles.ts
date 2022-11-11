import styled from 'styled-components'

import Link from 'next/link'

export const Item = styled.li`
  margin-left: 1rem;
`

export const Anchor = styled(Link)`
  color: var(--color-purple);

  &:hover {
    color: var(--color-black);
    text-decoration: underline var(--color-purple);
  }
`
