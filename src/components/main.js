import React from "react";
import { Route, Switch } from "react-router-dom";
import Stock from "./stockChartContainer";
import StockPage from "./stockPage";
import styled from "styled-components";

const Title = styled.h1`
  margin: 1rem;
  font-size: 2rem;
  font-weight: bolder;
`;
const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = () => {
  return (
    <MainWrapper>
      <Title>Stock Research</Title>
      <Switch>
        <Route exact path="/:sym" component={StockPage} />
        <Route path="/" component={Stock} />
      </Switch>
    </MainWrapper>
  );
};
export default Main;
