import styled from 'styled-components'

export const ContainerFilters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 4rem;
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`

export const Input = styled.input`
  width: 60%;
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
  outline: .1rem solid var(--color-purple);
`

export const Button = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  background-color: var(--color-white);
  border-radius: 1rem;
  border: none;
  outline: .1rem solid var(--color-purple);
`

export const Select = styled.select`
  width: 30%;
  padding: 1rem 2rem;
  background-color: var(--color-white);
  background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
  background-position: calc(100% - 0.75rem) center !important;
  -moz-appearance:none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
  padding-right: 2rem !important;
  border: none;
  border-radius: 1rem;
  margin-bottom: 2rem;
  outline: .1rem solid var(--color-purple);
`

export const Option = styled.option`
  font-size: 1.4rem;
`
