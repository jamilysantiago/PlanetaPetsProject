import React from 'react'
import Footer from '../components/Footer'
import AdoteformCards from '../components/AdoteForm'
import HeroImage from '../components/HeroImage'
import NavBar from '../components/NavBar'

const Adoteform = () => {
    return (
        <div>
            <NavBar />
            <HeroImage heading='Formulário de Adoção' text='Adoção é um ato de amor' />
            <AdoteformCards />
            <Footer />
        </div>
    )
}

export default Adoteform