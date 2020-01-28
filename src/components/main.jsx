import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import StockPage from './stockPage';

const MainWrapper = styled.main`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = () => (
  <MainWrapper>
    <Switch>
      <Route path="/:sym" component={StockPage} />
      <Route path="/" component={StockPage} />
    </Switch>
  </MainWrapper>
);
export default Main;
