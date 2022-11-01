import React from 'react'
import Footer from '../components/Footer'
import Video from '../components/Video'
import NavBar from '../components/NavBar/index'
import Destaques from '../components/Highlights'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Video />
            <Destaques />
            <Footer />
        </div>
    )
}

export default Home
