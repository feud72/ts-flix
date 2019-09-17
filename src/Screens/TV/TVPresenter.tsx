import React from "react";
import styled from "styled-components";

interface IProps {
  topRated?: null | any[];
  popular?: null | any[];
  airingToday?: null | any[];
  loading: boolean;
  error: null | string;
}

const TVPresenter: React.FC<IProps> = ({
  topRated,
  popular,
  airingToday,
  loading,
  error
}) => {
  return <div>TV</div>;
};

export default TVPresenter;
