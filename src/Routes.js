import React from "react"

import Login from "./App"
import Dash from "./components/Principal/Principal"
import Extrato from "./components/Extrato/Extrato"

import { Switch, Route } from "react-router-dom"

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashbord" exact component={Dash} />
      <Route path="/dashbord/extrato" exact component={Extrato} />
    </Switch>
  )
}

export default Routes
