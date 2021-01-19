import React from "react";
import './ButtonStyle.css'

const RegisterButton = ({ text }) => {
    return(
    <a href="/register" id="btn-register" className="btn">{text}</a>
    )
}

export default RegisterButton;
