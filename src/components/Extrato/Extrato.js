import React from "react"
import { Card, Button } from "react-bootstrap"

import PostDataEmp from "../../mocks/empresas.json"

function Extrato() {
  return (
    <div>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>Extrato</Card.Header>
        <Card.Body>
          <Card.Text>
            {PostDataEmp.map((postDetail, index) => {
              return (
                <div>
                  {postDetail.nomeEmpresa}: Saldo: {postDetail.saldo}
                </div>
              )
            })}
          </Card.Text>
          <Button variant="success" href="/dashbord/extrato" className="button">
            Acessar extrato empresa 1
          </Button>
          <Button variant="success" href="/dashbord/extrato" className="button">
            Acessar extrato empresa 2
          </Button>
          <Button variant="success" href="/dashbord/extrato" className="button">
            Acessar extrato empresa 3
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Extrato
