import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import DetailPresenter from './DetailPresenter';

interface IState {
  result: object[];
  error: string;
  loading: boolean;
}

interface IProps extends RouteComponentProps<any> {}

export default class extends React.Component<IProps, IState> {
  state = {
    result: [],
    error: '',
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: {id},
      },
      history: {push},
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push('/');
    }
  }

  render() {
    const {result, error, loading} = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
