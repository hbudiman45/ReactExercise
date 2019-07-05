import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Toggle from "./Toggle";
import SimpleCRUD from "./SimpleCRUD";
import Home from "./Home";
import ToDoList from "./ToDoList";
import ConditionalRendering from "./ConditionalRendering";
import ApiLoading from "./ApiLoading";
import LoginControl from "./LoginControl";
import ReactWithMosh from "./ReactWithMosh";
import HooksState from "./React Hooks/HooksState";
import List from "./List";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <List />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/toggle" component={Toggle} />
            <Route exact path="/simple_crud" component={SimpleCRUD} />
            <Route exact path="/react_with_mosh" component={ReactWithMosh} />
            <Route exact path="/to_do_list" component={ToDoList} />
            <Route exact path="/api" component={ApiLoading} />
            <Route exact path="/login" component={LoginControl} />
            <Route exact path="/hooks" component={HooksState} />
            <Route
              exact
              path="/conditional_rendering"
              component={ConditionalRendering}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;

const NoMatch = () => {
  return <h1>404 Page not found</h1>;
};
