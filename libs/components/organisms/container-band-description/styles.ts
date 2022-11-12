import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
`

export const Button = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background-color: var(--color-black);
  color: var(--color-white);
  border: none;
  outline: none;
  border-radius: .5rem;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-black);
    outline: .2rem solid var(--color-black)
  }
`
