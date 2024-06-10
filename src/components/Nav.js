import React from 'react'
import logo from "../images/globe-bg.png"


export default function Nav({openModal}) {

    
    return(
        <nav className='nav'>
            
            <div className='nav--titlelogo'>
                <img src={logo} className='nav--logo'/>
                <h1 className='nav--title'>my travel journal</h1>
            </div>
            <div className='nav--button'>
                <button className='nav--addEntry' onClick={openModal}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="24px" 
                        viewBox="0 -960 960 960" 
                        width="24px" 
                        fill="currentColor">
                            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                    </svg>
                    <span className='btntext'> Add new entry </span>
                </button>
            </div>
        </nav>
    );
}