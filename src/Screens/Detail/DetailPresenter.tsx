import React from 'react';
import styled from 'styled-components';
import Error from '../../Components/Error';

interface IProps {
  result?: null | any;
  loading: boolean;
  error: null | string;
}

const DetailPresenter: React.FC<IProps> = ({result, loading, error}) => {
  return <div>{error && <Error text={error} />}</div>;
};

export default DetailPresenter;
