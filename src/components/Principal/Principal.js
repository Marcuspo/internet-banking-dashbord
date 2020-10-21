import React from "react"
import { Navbar, Container, Card, CardDeck, Button } from "react-bootstrap"

import "./Principal.css"

import PostDataEmp from "../../mocks/empresas.json"

function Principal() {
  return (
    <div className="principal">
      <Container className="container">
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand>Tela principal</Navbar.Brand>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>Empresa: {PostDataEmp[0].nomeEmpresa}</Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Saldo: {PostDataEmp[0].saldo}</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <div className="dasbord">
        <CardDeck className="cards">
          <Card>
            <Card.Body>
              <Card.Title>Extrato</Card.Title>
              <Card.Text>
                Clique aqui para verificar o extrato da sua conta.
              </Card.Text>
            </Card.Body>
            <Button variant="success" href="/dashbord/extrato">
              Acessar extrato
            </Button>
          </Card>
        </CardDeck>
      </div>
    </div>
  )
}

export default Principal
