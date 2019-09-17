import React from 'react';
import styled from 'styled-components';

interface IProps {
  nowPlaying: object[];
  upcoming: object[];
  popular: object[];
  loading: boolean;
  error: string;
}

const HomePresenter: React.FC<IProps> = ({
  nowPlaying,
  upcoming,
  popular,
  loading,
  error,
}) => {
  return <div>Home</div>;
};

export default HomePresenter;
