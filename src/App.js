import React from "react";
import Nav from "./components/nav";
import Main from "./components/main";
import { Provider } from "react-redux";
import "./reset.css";
import "./App.css";

const App = ({ store }) => (
  <Provider store={store}>
    <div className="App">
      <Nav />
      <Main />
    </div>
  </Provider>
);

export default App;
