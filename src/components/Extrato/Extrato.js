import React from "react"
import { Card } from "react-bootstrap"

import "./Extrato.css"

import PostDataEmp from "../../mocks/transacoes.json"

function Extrato() {
  return (
    <div className="App-headerExtrato">
      <Card border="primary" style={{ width: "18rem" }} className="cardExtrato">
        <Card.Header>Detalhamento</Card.Header>
        <Card.Body></Card.Body>
      </Card>
    </div>
  )
}

export default Extrato
