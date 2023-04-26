import React from 'react'
import './footer.css'
import logo from '../images/logo-footer.png'
import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="social">
                <img className='logo-footer' src={logo} alt="logo" />
                <div className="social-link">
                    <a href="#"> <AiFillFacebook className='icon' /></a>
                    <a href="#"> <AiFillYoutube className="icon" /></a>
                    <a href="#"> <AiOutlineTwitter className='icon' /></a>
                    <a href="#"> <BsPinterest className='icon' /></a>
                    <a href="#"> <AiOutlineInstagram className='icon' /></a>
                </div>
            </div>

            <ul className='link'>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
            
            <div className="copyright">
                <button className="btn">Request Invite</button>
                <span> &copy; Easybank All Right Reserved</span>
            </div>
        </div>
    )
}

export default Footer
