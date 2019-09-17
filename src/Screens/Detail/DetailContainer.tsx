import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import DetailPresenter from './DetailPresenter';
import {moviesApi, tvApi} from '../../Api';

interface IState {
  result: object[];
  error: string;
  loading: boolean;
  isMovie: boolean;
}

interface IProps extends RouteComponentProps<any> {}

export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const {
      location: {pathname},
    } = props;
    this.state = {
      result: [],
      error: '',
      loading: true,
      isMovie: pathname.includes('/movie/'),
    };
  }
  async componentDidMount() {
    const {
      match: {
        params: {id},
      },
      history: {push},
    } = this.props;
    const {isMovie} = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push('/');
    }
    let result = [];
    try {
      if (isMovie) {
        const request = await moviesApi.movieDetail(parsedId);
        result = request.data;
      } else {
        const request = await tvApi.showDetail(parsedId);
        result = request.data;
      }
    } catch (e) {
      this.setState({
        error: e.message,
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }

  render() {
    const {result, error, loading} = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
