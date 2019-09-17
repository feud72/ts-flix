import React from "react";
import styled from "styled-components";

interface IProps {
  result?: null | any;
  loading: boolean;
  error: null | string;
}

const DetailPresenter: React.FC<IProps> = ({ result, loading, error }) => {
  return <div>Detail</div>;
};

export default DetailPresenter;
