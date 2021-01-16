import React from "react";
import './ButtonStyle.css'

const RegisterButton = (props) => {
    return(
    <a href="/login" id="btn-register" className="btn">{props.text}</a>
    )
}

export default RegisterButton;
