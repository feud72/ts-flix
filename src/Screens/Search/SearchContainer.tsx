import React from 'react';
import SearchPresenter from './SearchPresenter';
import {moviesApi, tvApi} from '../../Api';

interface IState {
  movieResults: object[];
  tvResults: object[];
  searchTerm: string;
  loading: boolean;
  error: string;
}

export default class extends React.Component {
  state: IState = {
    movieResults: [],
    tvResults: [],
    searchTerm: '',
    loading: false,
    error: '',
  };

  handleSubmit = () => {
    const {searchTerm} = this.state;
    if (searchTerm !== '') {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    this.setState({
      loading: true,
    });
    const {searchTerm} = this.state;
    try {
      const {
        data: {results: movieResults},
      } = await moviesApi.search(searchTerm);
      const {
        data: {results: showResults},
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        showResults,
      });
    } catch (e) {
      this.setState({
        error: e.message,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const {movieResults, tvResults, searchTerm, loading, error} = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
