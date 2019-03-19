import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <LoginForm />
      </div>
    );
  }
}

export default App;
