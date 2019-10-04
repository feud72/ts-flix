import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

interface IShow {
  name: string;
  id: number;
  poster_path: string;
  original_name: string;
  vote_average: number;
  first_air_date: null | string;
  isMovie: boolean;
}

interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  original_title: string;
  vote_average: number;
  release_date: string;
}

interface IProps {
  movieResults: null | Array<IMovie>;
  tvResults: null | Array<IShow>;
  searchTerm: string;
  loading: boolean;
  error: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  updateTerm: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Search: React.FC<IProps> = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm
}) => {
  return (
    <Container>
      <Helmet>
        <title>Search | TSflix</title>
      </Helmet>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Movies or TV Shows..."
          value={searchTerm}
          onChange={updateTerm}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults.map(movie => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                  isMovie={true}
                />
              ))}
            </Section>
          )}

          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
              {tvResults.map(show => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={
                    show.first_air_date
                      ? show.first_air_date.substring(0, 4)
                      : ""
                  }
                  isMovie={false}
                />
              ))}
            </Section>
          )}
        </>
      )}
      {error && <Message text={error} color="#e74c3c" />}
      {tvResults &&
        movieResults &&
        tvResults.length === 0 &&
        movieResults.length === 0 && (
          <Message text="Nothing Found" color="#95a5a6" />
        )}
    </Container>
  );
};

export default Search;
