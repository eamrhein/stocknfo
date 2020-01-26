import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav';
import Main from './components/main';

const App = ({ store }) => (
  <Provider store={store}>
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Nav />
        <Main />
      </Router>
    </div>
  </Provider>
);
App.defaultProps = {
  store: {},
};
App.propTypes = {
  store: PropTypes.shape({}),
};
export default App;
