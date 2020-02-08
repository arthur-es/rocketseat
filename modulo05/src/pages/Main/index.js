import React, { Component } from 'react';
import api from '../../services/api'

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

  handleSubmit = async e => {
    e.preventDefault();
    console.log("Iniciando chamada a API do GitHub...")
    const { newRepo } = this.state;

    const response = await api.get(`/repos/${newRepo}`)

    console.log(response.data)
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
