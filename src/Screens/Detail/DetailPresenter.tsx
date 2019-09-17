import React from 'react';

interface IProps {
  result: object[];
  loading: boolean;
  error: string;
}

const DetailPresenter: React.FC<IProps> = ({
  result,
  loading,
  error,
}) => {
  return <div>Detail</div>;
};

export default DetailPresenter;
