import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes.js"

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
)
