import React from "react";
import Nav from "./components/nav";
import Main from "./components/main";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
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
