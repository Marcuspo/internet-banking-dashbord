import React from "react"

import Login from "./App"
import Dash from "./components/Principal/Principal"

import { Switch, Route } from "react-router-dom"

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashbord" component={Dash} />
    </Switch>
  )
}

export default Routes
