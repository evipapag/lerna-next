import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  margin: 2em;
    padding: 0.5em;
    border: 2px solid #000;
    font-size: 2em;
    text-align: center;
`;

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <Container >Example Component 2: {text}</Container>
}
