import React from 'react';
import styled from 'styled-components';
import Section from '../../Components/Section';

const Container = styled.div`
  padding: 0px 10px;
`;

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
  return loading ? (
    ''
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => movie.title)}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">{upcoming.map(movie => movie.title)}</Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">{popular.map(movie => movie.title)}</Section>
      )}
    </Container>
  );
};

export default HomePresenter;
