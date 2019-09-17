import React from 'react';
import TVPresenter from './TVPresenter';

interface IState {
  topRated: object[];
  popular: object[];
  airingToday: object[];
  loading: boolean;
  error: string;
}

export default class extends React.Component {
  state: IState = {
    topRated: [],
    popular: [],
    airingToday: [],
    loading: true,
    error: '',
  };

  render() {
    const {topRated, popular, airingToday, loading, error} = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
