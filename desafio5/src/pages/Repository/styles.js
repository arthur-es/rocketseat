import styled, { css } from 'styled-components'

export const Loading = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

`
export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }


    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;
        a {
          text-decoration: none;
          color: #333;
        }
        a:hover {
          color: #7159c1;
        }

        span {
          background-color: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }

      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }

`

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    text-decoration: none;
    font-size: 16px;
  }
  a:hover {
    color: #7159FF;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  p {
    line-height: 1.4;
    font-size: 14px;
    text-align: center;
    color: #666;
    max-width: 80%;
  }

  img {
    margin-top: 20px;
    width: 120px;
    border-radius: 50%;
  }

`

export const Select = styled.select`
  border: 1px solid #eee;
  padding: 7px;
  max-height: 30px;
`

export const Navigation = styled.div`
  h3 {
    color: black;
    margin-bottom: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }
  button {
    border: none;
    background-color: #7159c1;
    border-radius: 4px;
    color: white;
    padding: 7px 15px;
    box-shadow: 0px 0px 2px 0px rgb(162, 162, 233);

  & + button {
    margin-left: 5px;
  }

  .noPreviousPage {
    background-color: grey;
    color: red;
    box-shadow: none;
  }


  }

`
