import React from 'react';
import styled from 'styled-components';
import Message from '../../Components/Message';

interface IProps {
  result?: null | any;
  loading: boolean;
  error: null | string;
}

const DetailPresenter: React.FC<IProps> = ({result, loading, error}) => {
  return <div>{error && <Message color="#e74c3c" text={error} />}</div>;
};

export default DetailPresenter;
