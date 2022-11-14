import React from 'react'
import './FooterStyles.css'
import { FaGithub } from 'react-icons/fa'
import logo from '../../assets/img/Logo2.png'
import {Link} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                <Link to='/'><img src={logo} alt="Logo" className='logo' /></Link>
                </div>
                <div className='right'>
                    <h4>Sobre o Projeto</h4>
                    <p>Adoção é uma escolha de amor.</p>
                    <SocialIcon className="social" url="https://github.com/idev-company" /> 
                </div>
                
            </div>
        </div>
    )
}

export default Footer
