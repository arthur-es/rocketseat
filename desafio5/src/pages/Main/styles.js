import styled, { keyframes, css } from 'styled-components'

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px 15px;
    border: 1px solid #eee;
  }

`

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`

export const SubmitButton = styled.button.attrs(props => (
  {
    type: 'submit',
    disabled: props.loading === 'true'
  }
))`
  background-color: #7159c1;
  border: none;
  border-radius: 4px;
  padding: 0px 15px;
  margin-left: 10px;
  color: white;

  display: flex;
  align-content: center;
  justify-content: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props => props.loading === 'true' && css`
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `}

`


export const List = styled.ul`
  margin-top: 30px;
  list-style: none;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      text-decoration: none;
      color: #7159c1;
    }

  }

`
