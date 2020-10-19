import React from "react"
import { Form, Button } from "react-bootstrap"
import logo from "../../logo.png"
import "../../App.css"

import Principal from "../Principal/Principal.js"

import Emoji from "../emoji.js"

import "./form.css"

function Forms() {
  return (
    <div className="forms">
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <text className="nameLogin">Login:</text>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            Usuário <Emoji symbol="🙎‍♂️" />
          </Form.Label>
          <Form.Control type="user" placeholder="Digite seu usuário" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            Senha <Emoji symbol="🙊" />
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button type="submit" className="button">
          Entrar <Emoji symbol="🚀" />
        </Button>
      </Form>
    </div>
  )
}

export default Forms
