import styled, { keyframes, css } from 'styled-components'


export const Container = styled.div`
  max-width: 700px;
  margin: 80px auto;
  background-color: white;
  border-radius: 4px;
  padding: 30px;
  box-shadow: 0 0 20px rgb(0,0,0,0.1);

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-content: center;

    svg {
      margin-right: 10px;
    }
  }

`

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
    disabled: props.loading
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

  ${props => props.loading && css`
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `}

`
