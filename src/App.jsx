import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Nav from './components/nav';
import Main from './components/main';
import { BaseStyle, theme } from './theme';


const App = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BaseStyle>
        <Router basename={process.env.PUBLIC_URL}>
          <Nav />
          <Main />
        </Router>
      </BaseStyle>
    </ThemeProvider>
  </Provider>
);
App.defaultProps = {
  store: {},
};
App.propTypes = {
  store: PropTypes.shape({}),
};
export default App;
