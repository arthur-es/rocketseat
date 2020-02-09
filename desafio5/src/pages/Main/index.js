import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api'

import { Form, SubmitButton, List } from './styles';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'

import Container from '../../components/Container'


export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    hasInputError: false
  }

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');
    if (repositories) {
      this.setState({
        repositories: JSON.parse(repositories)
      })
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories))
    }
  }

  handleInputChange = e => {
    this.setState({
      newRepo: e.target.value,
      hasInputError: false
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { newRepo, repositories } = this.state;

    this.setState({
      loading: true
    })
    try {

      const repoExists = repositories.find(repo => repo.name === newRepo);
      if (repoExists) throw new Error('Repositório duplicado');

      const response = await api.get(`/repos/${newRepo}`)

      const data = {
        name: response.data.full_name
      }

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',

      })

    } catch (err) {
      console.log("Catch --> ", err);
      this.setState({
        hasInputError: true
      });
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    const { newRepo, loading, repositories, hasInputError } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt size="2.2rem" color="#0a090c" />
          Repositórios
        </h1>
        <Form onSubmit={this.handleSubmit} hasInputError={hasInputError}>

          <input
            type="text"
            placeholder="Nome do repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading.toString()}>
            {
              loading ? (<FaSpinner size={14} />) : (<FaPlus size={14} />)
            }
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(repository => {
            return <li key={repository.name}>
              <span>
                {repository.name}
              </span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          })}
        </List>


      </Container >
    );
  }
}
