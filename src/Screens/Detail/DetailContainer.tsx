import React from "react";
import { RouteComponentProps } from "react-router-dom";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../Api";

interface IDetail {
  backdrop_path: string;
  poster_path: string;
  imdb_id: null | number;
  original_name: null | string;
  original_title: null | string;
  episode_run_time: null | number[];
  runtime: null | number;
  first_air_date: null | string;
  release_date: null | string;
  genres: { name: string }[];
  production_countries: null | { name: string }[];
  overview: string;
}

interface IState {
  result: null | IDetail;
  error: null | string;
  loading: boolean;
  isMovie: boolean;
}

interface IProps extends RouteComponentProps<any> {}

export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
    console.log(pathname);
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch (e) {
      this.setState({
        error: "Can't find anything."
      });
    } finally {
      this.setState({
        loading: false,
        result
      });
    }
  }

  render() {
    const { result, error, loading, isMovie } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        isMovie={isMovie}
      />
    );
  }
}
