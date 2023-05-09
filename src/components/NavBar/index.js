import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import logo from './logo.webp'
import { FaUserCircle } from "react-icons/fa";
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav className='nav-container'>
                <a href='/home' className='HomeSite'>
                    <img src={logo} alt='' />
                    <span>Automatic Irrigation</span> 
                </a>
                <ul>
                    <li>
                        <a href='/login'>
                            <FaUserCircle />
                        </a>
                    </li>
                    <li>
                        <a href='/humidity'>
                            <span>Humidity</span>
                        </a>
                    </li>
                    <li>
                        <a href='/temperature'>
                            <span>Temperature</span>
                        </a>
                    </li>
                    <li>
                        <a href='/moisture'>
                            <span>Moisture</span>
                        </a>
                    </li>
                    <li>
                        <a href='/watering'>
                            <span>Watering</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar