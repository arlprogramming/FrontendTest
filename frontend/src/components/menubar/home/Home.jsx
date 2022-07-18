import React, { useEffect } from "react";
import "./home.css";

import logo from "../../../logo.svg";

import { auth } from "../../../firebase/firebase";

const Home = () => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //jika user exist berarti ada yang login
      if (!user) {
        user.history.pushState("/login");
      }
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
