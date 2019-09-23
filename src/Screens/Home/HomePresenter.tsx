import React from 'react';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const Container = styled.div`
  padding: 0px 10px;
`;

interface IMovie {
  id: number;
  title: string;
}

interface IProps {
  nowPlaying: Array<IMovie>;
  upcoming: Array<IMovie>;
  popular: Array<IMovie>;
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
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map(movie => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {error.length > 0 && <Message color="#e74c3c" text={error} />}
    </Container>
  );
};

export default HomePresenter;
