import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useAuth } from '../../contexts/AuthContext';
import './RightSideForget.css'

export default function RightSide() {
  const [email, setEmail] = useState("");

  const { forgetPassword } = useAuth();

  function validateForm() {
    return !( email.length > 0 )
  }

  async function handleSubmit(event) {
    try {
      await forgetPassword(email);
      alert("Validation email sent")
    } 
    catch {
      alert("Failed to sent validation email. Try again later!")
    }
  }

  return (
    <div class="rightSideContainer">
      <div class="card">
        <br/>
        <br/>
        <div class="card-body">Reset your password</div>
        <div class="card-body-forget">
        To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process. 
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
        </Form>
        <br/>
      <button id = "forget-button" type="submit" onClick={handleSubmit} disabled={validateForm()} >Reset Password</button>
    </div>    
    </div>
  );
}