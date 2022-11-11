import styled from 'styled-components'

export const Div = styled.div`
  display: 100%;
  border: .1rem solid var(--color-green);
  border-radius: .5rem;
  padding: 1rem;
  box-shadow: .1rem .1rem .5rem var(--color-green);
`

export const Title = styled.h2`
  font-size: 3rem;
  color: var(--color-green);
`

export const Year = styled.h3`
  font-size: 2rem;
  color: var(--color-purple);
  margin: 2rem 0;
`

export const Members = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 .5rem;
`

export const Item = styled.li`
  font-size: 1.5rem;
  margin: 0 1rem 1rem 0;
`
