import React from "react"
import { Card, Button } from "react-bootstrap"

import "./Extrato.css"

import PostDataEmp from "../../mocks/empresas.json"

function Extrato() {
  return (
    <div className="App-headerExtrato">
      <Card border="primary" style={{ width: "18rem" }} className="cardExtrato">
        <Card.Header>Extrato</Card.Header>
        <Card.Body>
          <Card.Text>
            {PostDataEmp[0].nomeEmpresa}: <p>Saldo: {PostDataEmp[0].saldo}</p>
          </Card.Text>
          <Button
            variant="success"
            className="buttonExtrato"
            href="/dashbord/extrato/3"
          >
            Acessar extrato {PostDataEmp[0].nomeEmpresa}
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Extrato
