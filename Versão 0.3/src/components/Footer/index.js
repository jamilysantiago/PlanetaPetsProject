import React from 'react'
import './FooterStyles.css'
import { FaGithub } from 'react-icons/fa'
import logo from '../../assets/img/Logo2.png'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                <Link to='/'><img src={logo} alt="Logo" className='logo' /></Link>
                </div>
                <div className='right'>
                    <h4>Sobre o Projeto</h4>
                    <p>"Quem não ama cachorros e gatos? Um animalzinho em casa é uma amizade para vida toda! A convivência com pets traz inúmeros benefícios para as pessoas, como: vinculo afetivo, mais alegria em casa e união na família. Mas, o maior benefício que a adoção de animais pode nos trazer é a luta contra o abandono. Então, nós do Projeto Planeta Pets estamos aqui para combater o abandono de animais e ajudar você a encontrar um amigo para a vida toda.
Adoção é uma escolha de amor."</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
