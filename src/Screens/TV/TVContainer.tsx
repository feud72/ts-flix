import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../Api";

interface IShow {
  name: string;
  id: number;
  poster_path: string;
  original_name: string;
  vote_average: number;
  first_air_date: string;
  isMovie: boolean;
}

interface IState {
  topRated: Array<IShow>;
  popular: Array<IShow>;
  airingToday: Array<IShow>;
  loading: boolean;
  error: string;
}

export default class extends React.Component {
  state: IState = {
    topRated: [],
    popular: [],
    airingToday: [],
    loading: true,
    error: ""
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      this.setState({
        topRated,
        popular,
        airingToday
      });
    } catch (e) {
      this.setState({
        error: "Can't find TV information"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
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
