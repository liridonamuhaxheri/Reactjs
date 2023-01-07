import React from "react";
import logo from "../images/React-icon.png"
import "../style.css"
export default function Navbar (){
    return (<nav className="nav">
        <h1 className="Nav-item logo"><img src={logo} width="30px" height="30px"/>React Facts</h1>
        <h2 className="Nav-item link">React Course - Project 1</h2>
    </nav>)
}