import React from 'react';

interface IProps {
  topRated: object[];
  popular: object[];
  airingToday: object[];
  loading: boolean;
  error: string;
}

const TVPresenter: React.FC<IProps> = ({
  topRated,
  popular,
  airingToday,
  loading,
  error,
}) => {
  return <div>TV</div>;
};

export default TVPresenter;
