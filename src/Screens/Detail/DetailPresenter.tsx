import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

interface IDetail {
  backdrop_path: string;
  poster_path: string;
  imdb_id: null | number;
  original_name: null | string;
  original_title: null | string;
  episode_run_time: null | number[];
  runtime: null | number;
  first_air_date: null | string;
  release_date: null | string;
  genres: { name: string }[];
  production_countries: null | { name: string }[];
  overview: string;
}

interface IProps {
  result: null | IDetail;
  loading: boolean;
  error: null | string;
  isMovie: boolean;
}

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div<{ bgImage: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div<{ bgImage: string }>`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  vertical-align: middle;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  vertical-align: middle;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.8;
  line-height: 1.5;
  width: 90%;
`;

const DetailPresenter: React.FC<IProps> = ({
  result,
  loading,
  error,
  isMovie
}) => {
  return loading ? (
    <>
      <Helmet>
        <title>Loading | TSflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    result && (
      <Container>
        <Helmet>
          <title>
            {isMovie ? result.original_title : result.original_name} | TSflix
          </title>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover
            bgImage={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("../../assets/noPosterSmall.png")
            }
          />
          <Data>
            <Title>
              {isMovie ? result.original_title : result.original_name}{" "}
              {result.imdb_id && (
                <a
                  href={`https://imdb.com/title/${result.imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="IMDb icon"
                    src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"
                    width="45"
                    height="24"
                  />
                </a>
              )}
            </Title>
            <ItemContainer>
              <Item>
                {isMovie
                  ? result.release_date && result.release_date.substring(0, 4)
                  : result.first_air_date &&
                    result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>|</Divider>
              <Item>
                {isMovie
                  ? `${result.runtime ? result.runtime : ""} min`
                  : `${
                      result.episode_run_time ? result.episode_run_time[0] : ""
                    } min`}
              </Item>
              <Divider>|</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
              </Item>
            </ItemContainer>
            <ItemContainer>
              <Item>
                {result.production_countries &&
                  result.production_countries.map((country, index) =>
                    result.production_countries &&
                    index === result.production_countries.length - 1
                      ? country.name
                      : `${country.name} / `
                  )}
              </Item>
            </ItemContainer>
            <Overview>{result.overview}</Overview>
          </Data>
          {error && error.length > 0 && (
            <Message color="#e74c3c" text={error} />
          )}
        </Content>
      </Container>
    )
  );
};

export default DetailPresenter;
