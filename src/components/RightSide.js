import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./RightSide.css";

export default function RightSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
  <div class="card">
    <br/>
    <br/>
    <br/>
      <div class="card-body">LOGIN</div>
      <div class="card-body-2">
        Belum punya akun? <a href="">Register</a>
      </div>
      <br/>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="">Forget Password?</a>
        </Form.Group>
      </Form>
      <br/>
    <Button type="submit">LOGIN</Button>
  </div>
  );
}