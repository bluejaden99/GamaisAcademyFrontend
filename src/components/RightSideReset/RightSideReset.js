import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useAuth } from '../../contexts/AuthContext';
import { useParams } from 'react-router';
import '../RightSideForget/RightSideForget.css'

export default function RightSide() {
  const { resetPassword } = useAuth();
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  let { token } = useParams();
  function validateForm() {
    return !(confpassword.length > 0 && password.length > 0)
  }

  async function handleSubmit(event) {
    try {
      await resetPassword(password, confpassword, token);
      alert("Successfully Reset Password")
    } catch {
      alert("Failed to Reset Passwrod")
    }
  }

  return (
  <div class="rightSideContainer">
    <div class="card">
      <br/>
      <br/>
      <br/>
        <div class="card-body">Reset Password</div>
        <br/>
        <br/>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Konfirmasi Password</Form.Label>
            <Form.Control
              type="password"
              value={confpassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
        <br/>
      <button id = "forget-button" type="submit" onClick={handleSubmit} disabled={validateForm()} >Reset Password</button>
    </div>
  </div>
  );
}