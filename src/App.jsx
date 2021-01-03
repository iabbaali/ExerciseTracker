import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar.component.jsx";
import ExercisesList from "./components/exercises-list.component.jsx";
import EditExercise from "./components/edit-exercise.component.jsx";
import CreateExercise from "./components/create-exercise.component.jsx";
import CreateUser from "./components/create-user.component.jsx";

function App(props) {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
