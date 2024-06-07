import React from 'react'
import logo from "../images/globe-bg.png"


export default function Nav() {
    return(
        <nav className='nav'>
            <img src={logo} className='nav--logo'/>
            <h1 className='nav--title'>my travel journal</h1>
        </nav>
    );
}