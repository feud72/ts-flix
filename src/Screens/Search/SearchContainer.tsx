import React from 'react';
import SearchPresenter from './SearchPresenter';
import {moviesApi, tvApi} from '../../Api';

interface IShow {
  name: string;
  id: number;
}

interface IMovie {
  id: number;
  title: string;
}

interface IState {
  movieResults: null | Array<IMovie>;
  tvResults: null | Array<IShow>;
  searchTerm: string;
  loading: boolean;
  error: null | string;
}

export default class extends React.Component {
  state: IState = {
    movieResults: null,
    tvResults: null,
    searchTerm: '',
    loading: false,
    error: null,
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {searchTerm} = this.state;
    if (searchTerm !== '') {
      this.searchByTerm();
    }
  };

  updateTerm = (event: React.FormEvent<HTMLInputElement>): void => {
    const {
      currentTarget: {value},
    } = event;
    this.setState({
      searchTerm: value,
    });
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
        data: {results: tvResults},
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults,
      });
//      throw Error(); <=  이 부분이 없으면 에러 메세지가 뜨지 않습니다. 
    } catch (e) {
      this.setState({
        error: "Can't find results.",
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
        updateTerm={this.updateTerm}
      />
    );
  }
}
