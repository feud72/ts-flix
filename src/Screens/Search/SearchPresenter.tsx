import React from 'react';
import styled from "styled-components";

interface IProps {
  movieResults: object[];
  tvResults: object[];
  searchTerm: string;
  loading: boolean;
  error: string;
  handleSubmit: () => void;
}

const Search: React.FC<IProps> = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
}) => {
  return <div>Search</div>;
};

export default Search;
