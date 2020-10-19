import React from "react"
import { Navbar, Container, Card, CardDeck, Button } from "react-bootstrap"

import "./Principal.css"

function Principal() {
  return (
    <div className="principal">
      <Container className="container">
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand>Tela principal</Navbar.Brand>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>Empresa:</Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Saldo:</Navbar.Text>
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
            <Button variant="success" href="/extrato">
              Acessar extrato
            </Button>
          </Card>
        </CardDeck>
      </div>
    </div>
  )
}

export default Principal
