import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

export default function RightSide() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tgllahir, setTglahir] = useState("");

  const history = useHistory();
  const [success, setSuccess] = useState(true);
  const { register } = useAuth();

  async function handleSubmit(event) {
    try {
      await register(nama, email, password, tgllahir);
      history.push('/');
    } catch {
      console.log('fail to login');
      setSuccess(false)
    }
  }

  return (
    <div class="rightSideContainer">
      `<div class="card">
        <br/>
        <br/>
        <div class="card-body">REGISTER</div>
        <div class="card-body-2">
          Sudah punya akun? <a href="/login">Login</a>
        </div>
        <br/>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="nama">
            <Form.Label>Nama</Form.Label>
            <Form.Control
              autoFocus
              type="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </Form.Group>
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
          </Form.Group>
          <Form.Group size="lg" controlId="tgllahir">
            <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control
                type="tgllahir"
                value={tgllahir}
                onChange={(e) => setTglahir(e.target.value)}
              />
          </Form.Group>
        </Form>
        <br/>
      <button type="submit" onClick={handleSubmit}>REGISTER</button>
    </div>
    {!success && 
    <div class="alert alert-danger">
      <strong>Failed!</strong> Server error, try again
    </div>}
    </div>
  );
}