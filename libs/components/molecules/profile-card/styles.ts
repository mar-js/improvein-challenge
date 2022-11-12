import styled from 'styled-components'

export const Article = styled.article`
  width: 100%;
  max-width: 30rem;
  margin: auto;
`

export const Title = styled.h2`
  font-size: 2rem;
`

export const Subtitle = styled.h2`
  font-size: 1.8rem;
`

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  background-color: var(--color-white);
  border: .1rem solid var(--color-green);
  border-radius: 1rem;
  outline: none;
  margin-top: 1rem;

  &:hover {
    background-color: var(--color-green);
    color: var(--color-white);
    border-color: var(--color-white)
  }
`
