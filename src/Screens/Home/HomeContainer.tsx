import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../Api";

interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  original_title: string;
  vote_average: number;
  release_date: string;
}

interface IState {
  nowPlaying: Array<IMovie>;
  upcoming: Array<IMovie>;
  popular: Array<IMovie>;
  error: string;
  loading: boolean;
}

export default class extends React.Component {
  state: IState = {
    nowPlaying: [],
    upcoming: [],
    popular: [],
    error: "",
    loading: true
  };

  async componentDidMount() {
    try {
      this.setState({
        error: ""
      });
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();
      const {
        data: { results: popular }
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
      if (
        nowPlaying.length === 0 &&
        popular.length === 0 &&
        upcoming.length === 0
      ) {
        throw Error();
      }
    } catch (e) {
      this.setState({
        error: "Can't find movie information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
