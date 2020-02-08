import styled from 'styled-components'


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
export const SubmitButton = styled.button.attrs(
  { type: 'submit', }
)`
  background-color: #7159c1;
  border: none;
  border-radius: 4px;
  padding: 0px 15px;
  margin-left: 10px;
  color: white;

  display: flex;
  align-content: center;
  justify-content: center;

`
