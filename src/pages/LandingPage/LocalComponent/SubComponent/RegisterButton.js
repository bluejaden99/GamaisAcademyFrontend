import React from "react";
import './ButtonStyle.css'

const RegisterButton = (props) => {
    return(
    <button type="button" id="btn-register" className="btn">{props.text}</button>
    )
}

export default RegisterButton;
