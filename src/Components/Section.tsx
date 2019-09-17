import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const Grid = styled.div`
  margin-top: 25px;
`;

interface IProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<IProps> = ({title, children}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

export default Section;
