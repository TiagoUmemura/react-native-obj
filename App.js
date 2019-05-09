import React, { Component } from "react";

import { YellowBox } from "react-native";

import AppRouter from "./src/router/AppRouter";

export default class App extends Component {
  constructor() {
    super();
    YellowBox.ignoreWarnings(["Setting a timer"]);
    YellowBox.ignoreWarnings(["Warning: componentWill"]);
  }
  render() {
    return <AppRouter />;
  }
}
