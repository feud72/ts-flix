import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../Api";

interface IState {
  topRated?: null | any[];
  popular?: null | any[];
  airingToday?: null | any[];
  loading: boolean;
  error: null | string;
}

export default class extends React.Component {
  state: IState = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
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
        error: e.message
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
