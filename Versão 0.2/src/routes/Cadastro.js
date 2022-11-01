import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import NavBar from '../components/NavBar'
import Cadastro from '../components/Form/cadastro'

const Singup = () => {
    return (
        <div>
            <NavBar />
            <HeroImage heading='CADASTRO' />
            <Cadastro />
        </div>
    )
}

export default Singup;
