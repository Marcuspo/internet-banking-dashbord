import React from "react"
import { Card } from "react-bootstrap"

import "./Extrato.css"

import PostDataEmp from "../../mocks/transacoes.json"

function Extrato() {
  const empresaFiltered = PostDataEmp.filter((emp) => emp.empresaId === 1)
  console.log(empresaFiltered)

  function impValores(e, i, a) {
    console.log("passou")
  }

  return (
    <div className="App-headerExtrato">
      <Card border="primary" style={{ width: "18rem" }} className="cardExtrato">
        <Card.Header>Detalhamento</Card.Header>
        <Card.Body>
          <Card.Text>DETALHES</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Extrato
