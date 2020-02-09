import styled from 'styled-components'

const Container = styled.div`
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
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

`
export default Container;
