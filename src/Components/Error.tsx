import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: #e74c3c;
  font-weight: 600;
`;

interface IProps {
  text: string;
}
const Error: React.FC<IProps> = ({text}) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

export default Error;
