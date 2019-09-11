import React from 'react';
import styled from 'styled-components';
const Container = styled.span<{isBlue: boolean}>`
  background-color: ${props => (props.isBlue ? 'blue' : 'blank')};
`;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({count}) => (
  <Container isBlue={count > 10}>{count}</Container>
);

export default Number;
