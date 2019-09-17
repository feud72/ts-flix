import React from "react";
import styled from "styled-components";

interface IProps {
  movieResults?: null | any[];
  tvResults?: null | any[];
  searchTerm: string;
  loading: boolean;
  error: null | string;
  handleSubmit: () => void;
}

const Search: React.FC<IProps> = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit
}) => {
  return <div>Search</div>;
};

export default Search;
