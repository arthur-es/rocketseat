import React, { Component } from 'react';
import api from '../../services/api'

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './styles';


export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false
  }

  handleInputChange = e => {
    this.setState({
      newRepo: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    console.log("Iniciando chamada a API do GitHub...")
    const { newRepo, repositories, loading } = this.state;

    this.setState({
      loading: true
    })
    const response = await api.get(`/repos/${newRepo}`)

    const data = {
      name: response.data.full_name
    }

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false
    })
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

          <SubmitButton loading={this.state.loading}>
            {
              this.state.loading ? <FaSpinner size={14} /> : <FaPlus size={14} />
            }
          </SubmitButton>
        </Form>
      </Container >
    );
  }
}
