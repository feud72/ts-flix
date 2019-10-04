import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../Api";

interface IShow {
  name: string;
  id: number;
  poster_path: string;
  original_name: string;
  vote_average: number;
  first_air_date: string;
  isMovie: boolean;
}

interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  original_title: string;
  vote_average: number;
  release_date: string;
}

interface IState {
  movieResults: null | Array<IMovie>;
  tvResults: null | Array<IShow>;
  searchTerm: string;
  loading: boolean;
  error: string;
}

export default class extends React.Component {
  state: IState = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: ""
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = (event: React.FormEvent<HTMLInputElement>): void => {
    const {
      currentTarget: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
  };

  searchByTerm = async () => {
    this.setState({
      loading: true
    });
    const { searchTerm } = this.state;
    try {
      this.setState({
        error: ""
      });
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults
      });
      if (movieResults.length === 0 && tvResults.length === 0) {
        throw Error();
      }
    } catch (e) {
      this.setState({
        error: "Can't find results."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
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
