import React from 'react';
import HomePresenter from './HomePresenter';

interface IState {
  nowPlaying: object[];
  upcoming: object[];
  popular: object[];
  error: string;
  loading: boolean;
}

export default class extends React.Component {
  state: IState = {
    nowPlaying: [],
    upcoming: [],
    popular: [],
    error: '',
    loading: true,
  };

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
