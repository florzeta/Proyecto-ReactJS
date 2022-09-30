import React from 'react';
import "../Navbar/Navbar.css";



const Navbar = () => {
    
        return (

            <nav className='NavbarItems'>
                <ul>
                    <li>
                        <link to="/">HOME</link>
                    </li>
                    <li>
                        <link to="/">CUADROS</link>
                    </li>
                    <li>
                        <link to="/">MARCOS</link>
                    </li>
                </ul>

            </nav>
        )
}

export default Navbar

