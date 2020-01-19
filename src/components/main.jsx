import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Stock from './stockChartContainer';
import StockPage from './stockPage';

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
const Main = () => (
  <MainWrapper>
    <Title>Stock Research</Title>
    <Switch>
      <Route path="/stocks/:sym" exact component={StockPage} />
      <Route path="/stocks/" component={Stock} />
      <Redirect to="/stocks/" />
    </Switch>
  </MainWrapper>
);
export default Main;
