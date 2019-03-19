import React, { Component } from "react";
import "./App.css";
import { UserProvider } from "./context/user";
import LoginPage from "./components/LoginPage/LoginPage";

class App extends Component {
  render() {
    return (
      <div className="container">
        <UserProvider>
          <LoginPage />
        </UserProvider>
      </div>
    );
  }
}

export default App;
