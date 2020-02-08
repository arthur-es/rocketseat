import React, { Component } from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',

  }

  handleInputChange = e => {
    this.setState({
      newRepo: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submiting form...")
  }

  render() {
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
          </h1>
        <Form onSubmit={this.handleSubmit}>

          <input
            type="text"
            placeholder="Nome do repositório"
            value={this.state.newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton>
            <FaPlus />
          </SubmitButton>
        </Form>
      </Container >
    );
  }
}
