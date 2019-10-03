import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../Api";

interface IState {
  movieResults: { title: string; id: number }[];
  tvResults: { name: string; id: number }[];
  searchTerm: string;
  loading: boolean;
  error: string;
}

export default class extends React.Component {
  state: IState = {
    movieResults: [],
    tvResults: [],
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
