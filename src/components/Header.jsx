import React, { useState } from 'react'
import './header.css'
import close from '../images/icon-close.svg'
import logo from '../images/logo.svg'
import burger from '../images/icon-hamburger.svg'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isLogo, setIsLogo] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsLogo(false)
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
        setIsLogo(!isLogo)
    }

    return (
        <div className='header'>
            {isOpen && (
                <button className="close-button" onClick={handleCloseMenu}>
                    <span className="close-icon" aria-hidden="true">
                        <img src={close} alt="close" />
                    </span>
                </button>
            )}
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
                <button className="btn btn-header">Request Invite</button>
            </div>
            <img className='logo' src={logo} alt="logo" />
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu} >
                <img className='bar' src={burger} alt="menu" />
            </div>
        </div>
    )
}

export default Header
