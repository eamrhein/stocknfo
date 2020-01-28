import React from 'react';
import styled from 'styled-components';
import HashLoader from 'react-spinners/HashLoader';

const LoadingCard = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.card};
    margin-top: 10vw;
    height: 40vh;
    width: 80vw;
    line-height: 2.5;
`;

const Loading = () => (
  <LoadingCard>
    <h2>Stock Data is Loading</h2>
    <HashLoader size={80} color="#1EB980" />
  </LoadingCard>
);
export default Loading;
