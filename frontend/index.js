/** @format */

import { AppRegistry } from "react-native";
// import { name as appName } from "./app.json";

import React, { Component } from "react";
import { configureStore } from "./store/store";
import { Provider } from "react-redux";

import App from "./components/App";

const store = configureStore();

class KRoberts extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("KRoberts", () => KRoberts);
