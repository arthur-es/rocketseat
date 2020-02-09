import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api'
import PropTypes from 'prop-types'

import Container from '../../components/Container'

import { Loading, Owner, IssuesList, Select, Navigation } from './styles'

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string
      })
    }).isRequired,
  }

  state = {
    loading: true,
    repository: {},
    issues: [],
    issueState: 'all',
    page: 1,
    hasPreviousPage: false
  }

  async componentDidMount() {
    const { match } = this.props;
    const { issueState, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository)

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issueState,
          per_page: 30
        }
      })
    ])

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false
    })

  }

  handleSelectChange = async e => {
    await this.setState({
      issueState: e.target.value.toString()
    });
    const { issueState } = this.state;
    console.log("IssueState: ", issueState);
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    // try {
    //   const response = await api.get(`/repos/${repoName}/issues`, {
    //     params: {
    //       state: issueState
    //     }
    //   })
    //   console.log('Response: ', response);
    //   this.setState({
    //     issues: response.data
    //   });
    // } catch (err) {
    //   console.log("Error: ", err);
    // }
  }

  updatePage = async () => {
    console.log("Updating issues...");
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    const { issueState, page } = this.state;

    try {
      const response = await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issueState,
          per_page: 30,
          page: page
        }
      });


      this.setState(() => ({
        issues: response.data
      }));
    } catch (err) {
      console.log(err);
    }


  }

  handleNextPage = async e => {
    console.log("Next page...")
    this.setState((prevState) => ({
      page: prevState.page + 1,
      hasPreviousPage: true
    }))

    this.updatePage();

  }

  handlePreviousPage = async e => {
    console.log("Previous page...");

    if (this.state.page > 1) {
      this.setState((prevState) => ({
        page: prevState.page - 1
      }))
    } else {
      this.setState((prevState) => ({
        hasPreviousPage: false
      }));
    }

    this.updatePage();

  }


  render() {

    const { loading, repository, issues, issueState, page, hasPreviousPage } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios salvos</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <div className="repositoryOptionsWrapper">
          <Navigation>
            <h3>Página: {page}</h3>
            <button
              onClick={this.handlePreviousPage}
              className={hasPreviousPage ? null : 'noPreviousPage'} >Voltar</button>
            <button onClick={this.handleNextPage}>Próxima</button>
          </Navigation>

          <Select
            name="issueOptions"
            value={issueState}
            onChange={this.handleSelectChange}
          >
            <option value="all" >Todas</option>
            <option value="open" >Abertas</option>
            <option value="closed" >Fechadas</option>
          </Select>
        </div>

        <IssuesList>
          {
            issues.map(issue => (
              <li key={String(issue.id)}>
                <img src={issue.user.avatar_url} alt={issue.user.login} />
                <div>
                  <strong>
                    <a href={issue.html_url}>{issue.title}</a>
                    {
                      issue.labels.map(label => (
                        <span key={String(label.id)}>{label.name}</span>
                      ))
                    }
                  </strong>
                  <p>{issue.user.login}</p>
                </div>
              </li>
            ))
          }
        </IssuesList>
      </Container>
    )
  }
}
