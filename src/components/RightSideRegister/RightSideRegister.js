import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';

export default function RightSide() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [tgllahir, setTglahir] = useState("");
  const [domisili, setDomisili] = useState("");

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const { register } = useAuth();

  function validateForm() {
    return !(nama.length > 0 && email.length > 0 && password.length > 0 && confpassword.length > 0 && tgllahir.length > 0 && domisili.length > 0 && password.localeCompare(confpassword) === 0)
  }

  async function handleSubmit(event) {
    var tanggalLahir = Date.parse(tgllahir);
    setLoading(true)
    try {
      await register(nama, email, password, confpassword, tanggalLahir, domisili);
      history.push('/');
    } catch {
      console.log('fail to login');
      setSuccess(false)
    }
    setLoading(false)
  }

  return (
    <div class="rightSideContainer">
      <div class="card">
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
          <Form.Group size="lg" controlId="email">
            <Form.Label>Domisili</Form.Label>
            <Form.Control
              autoFocus
              type="domisili"
              value={domisili}
              onChange={(e) => setDomisili(e.target.value)}
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
          <Form.Group size="lg" controlId="password">
            <Form.Label>Konfirmasi Password</Form.Label>
            <Form.Control
              type="password"
              value={confpassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="tgllahir">
            <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control
                type="date"
                value={tgllahir}
                onChange={(e) => setTglahir(e.target.value)}
              />
          </Form.Group>
        </Form>
        <br/>
      <button type="submit" onClick={handleSubmit} disabled={validateForm()} >REGISTER</button>
    </div>    
    {loading &&
      <div id="loading">
        <ReactLoading color="#d3d3d3" height={'20%'} width={'20%'}/>
      </div>}
      {!success && 
      <div class="alert alert-danger">
        <strong>Failed!</strong> Server error, try again
      </div>}
    </div>
  );
}