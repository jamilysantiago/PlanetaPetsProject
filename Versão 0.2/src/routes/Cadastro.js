import React from 'react'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'
import NavBar from '../components/NavBar'
import Cadastro from '../components/Form/cadastro'

const Pricing = () => {
    return (
        <div>
            <NavBar />
            <HeroImage heading='CADASTRO' />
            <Cadastro />
        </div>
    )
}

export default Pricing
