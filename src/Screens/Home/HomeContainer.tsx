import React from 'react';
import HomePresenter from './HomePresenter';
import {moviesApi} from '../../Api';

interface IState {
  nowPlaying: null | Array<any>;
  upcoming: null | Array<any>;
  popular: null | Array<any>;
  error: null | string;
  loading: boolean;
}

export default class extends React.Component {
  state: IState = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: {results: nowPlaying},
      } = await moviesApi.nowPlaying();
      const {
        data: {results: upcoming},
      } = await moviesApi.upcoming();
      const {
        data: {results: popular},
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular,
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
  }

  render() {
    const {nowPlaying, upcoming, popular, error, loading} = this.state;
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
