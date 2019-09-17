import React from 'react';
import SearchPresenter from './SearchPresenter';

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

  render() {
    const {movieResults, tvResults, searchTerm, loading, error} = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
      />
    );
  }
}
