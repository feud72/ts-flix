import React from 'react';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Error from '../../Components/Error';

const Container = styled.div`
  padding: 0px 20px;
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
}

interface IMovie {
  id: number;
  title: string;
}

interface IProps {
  movieResults?: null | Array<IMovie>;
  tvResults?: null | Array<IShow>;
  searchTerm: string;
  loading: boolean;
  error: null | string;
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
  updateTerm,
}) => {
  return (
    <Container>
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
                <span key={movie.id}>{movie.title}</span>
              ))}
            </Section>
          )}

          {tvResults && tvResults.length > 0 && (
            <Section title="Show Results">
              {tvResults.map(show => (
                <span key={show.id}>{show.name}</span>
              ))}
            </Section>
          )}
        </>
      )}
      {error && <Error text={error} />}
    </Container>
  );
};

export default Search;
