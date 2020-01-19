import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav';
import Main from './components/main';

const App = ({ store }) => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <Nav />
        <Main />
      </Router>
    </div>
  </Provider>
);

export default App;
