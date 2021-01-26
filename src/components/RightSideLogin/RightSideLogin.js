import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import "./RightSideLogin.css";

export default function RightSide() {
  const { login, currentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function validateForm() {
    return !(email.length > 0 && password.length > 0)
  }

  async function handleSubmit(event) {
    try {
      await login(email, password);
      history.push('/');
    } catch {
      alert("Failled to login")
    }
  }

  return (
  <div class="rightSideContainer">
    <div class="card">
      <br/>
      <br/>
      <br/>
        <div class="card-body">LOGIN</div>
        <br/>
        <div class="card-body-2">
          Belum punya akun? <a href="/register">Register</a>
        </div>
        <br/>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <br/>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <br/>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <a href="">Forget Password?</a>
          </Form.Group>
        </Form>
        <br/>
      <button type="submit" onClick={handleSubmit} disabled={validateForm()} >LOGIN</button>
    </div>
  </div>
  );
}