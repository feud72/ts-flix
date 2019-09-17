import React from 'react';
import DetailPresenter from './DetailPresenter';

interface IState {
  result: object[];
  error: string;
  loading: boolean;
}

export default class extends React.Component {
  state: IState = {
    result: [],
    error: '',
    loading: true,
  };

  render() {
    const {result, error, loading} = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
      />
    );
  }
}
