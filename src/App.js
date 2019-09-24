import React, { Component } from "react";
import "./App.scss";
import Navbar from "./component/Navbar/navbar.js";
import Tourlist from "./component/Tourlist";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Tourlist />
      </div>
    );
  }
}
