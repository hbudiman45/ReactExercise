import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Router from "./components/Router";
import List from "./components/List";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
