import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import { Route, Link, Switch } from "react-router-dom";
import MyTodoComponent from "./components/my-todo";
import AddTodoComponent from "./components/add-todo";

/**
 * 
 */
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route component={MyTodoComponent} path="/" exact />
        <Route component={AddTodoComponent} path="/add-todo" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
