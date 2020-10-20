import React from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import logo from "../../logo.png"

import Emoji from "../emoji.js"

import "../../App.css"
import "./form.css"

function Forms() {
  return (
    <div className="forms">
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <text className="nameLogin">Login:</text>
      <Form>
        <Form.Group controlId="formBasicEmail" className="user">
          <Form.Label>
            Usuário <Emoji symbol="🙎‍♂️" />
          </Form.Label>
          <Form.Control type="user" placeholder="Digite seu usuário" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="password">
          <Form.Label>
            Senha <Emoji symbol="🙊" />
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Link to="/dashbord">
          <Button variant="success" type="submit" className="button">
            Entrar <Emoji symbol="🚀" />
          </Button>
        </Link>
      </Form>
    </div>
  )
}

export default Forms
