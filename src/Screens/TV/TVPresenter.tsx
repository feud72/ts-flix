import React from 'react';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';

const Container = styled.div`
  padding: 0px 10px;
`;

interface IShow {
  name: string;
  id: number;
}

interface IProps {
  topRated?: null | Array<IShow>;
  popular?: null | Array<IShow>;
  airingToday?: null | Array<IShow>;
  loading: boolean;
  error: null | string;
}

const TVPresenter: React.FC<IProps> = ({
  topRated,
  popular,
  airingToday,
  loading,
  error,
}) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map(show => (
            <span key="{show.id}">{show.name}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map(show => (
            <span key="{show.id}">{show.name}</span>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map(show => (
            <span key="{show.id}">{show.name}</span>
          ))}
        </Section>
      )}
    </Container>
  );
};

export default TVPresenter;
