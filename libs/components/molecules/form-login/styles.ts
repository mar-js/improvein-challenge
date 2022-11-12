import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  max-width: 50rem;
  margin: auto;
  box-shadow: .1rem .1rem 1rem var(--color-purple);
  border-radius: .2rem;
  padding: 1rem;
`

export const InputGroup = styled.div`
  margin-bottom: 2rem;
`

export const Label = styled.label`
  display: inline-block;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: .2rem;
  outline: .1rem solid var(--color-black);
  padding: .5rem 1rem;
`

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.6rem;
  padding: .5rem 1rem;
  color: var(--color-white);
  background-color: var(--color-purple);
  border-radius: .2rem;
  font-weight: 600;

  &:hover {
    color: var(--color-purple);
    outline: .1rem solid var(--color-purple);
    background-color: var(--color-white)
  }
`
