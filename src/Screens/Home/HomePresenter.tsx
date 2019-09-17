import React from "react";
import styled from "styled-components";
import Section from "../../Components/Section";

const Container = styled.div`
  padding: 0px 10px;
`;

interface IProps {
  nowPlaying?: null | any[];
  upcoming?: null | any[];
  popular?: null | any[];
  loading: boolean;
  error: null | string;
}

const HomePresenter: React.FC<IProps> = ({
  nowPlaying,
  upcoming,
  popular,
  loading,
  error
}) => {
  return loading ? (
    <div></div>
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => movie.title)}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map(movie => movie.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map(movie => movie.title)}
        </Section>
      )}
    </Container>
  );
};

export default HomePresenter;
