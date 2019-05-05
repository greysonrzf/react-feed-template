import React, { Component, Fragment } from "react";
import { render as Render } from "react-dom";

import App from "./components/App";

import "./styles/app.scss";

Render(<App />, document.getElementById("app"));
