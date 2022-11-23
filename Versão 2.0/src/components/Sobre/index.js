import { Fragment, React, useState } from 'react';
import './About.css';

const About = () => {
const [ toggleTab, setToggleTab ] = useState(1)
const toggleState = (index) => {
    setToggleTab(index)
}

    return (
        <Fragment>
            <section className='about'>
                <div className='row'>

                    <div className='column'>
                        <div className='about-img'>
                            <img src='https://cdn-icons-png.flaticon.com/512/3047/3047928.png'/>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='tabs'>
                            
                            <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
                            onClick = {() => toggleState(1)}
                            >
                                <h2>About</h2>
                            </div>

                            <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
                            onClick = {() => toggleState(2)}
                            >
                                <h2>Skills</h2>
                            </div>

                            <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
                            onClick = {() => toggleState(3)}
                            >
                                <h2>Experience</h2>
                            </div>

                        </div>

                        <div className='tab-content'>

                            {/* About Content */}
                            <div className={toggleTab === 1 ? "content active-content":"content"}>
                                <h2>My Story</h2>
                                <p>Enredo: designa a história da narrativa. Dependendo de como a trama é contada, ele é classificado em dois tipos: enredo linear (sequência cronológica) e enredo não linear (não possui uma sequência cronológica).</p>
                                <h3>Responsive About Us Page On React Js | Switch Tab In React Js | About Us Page | React Js Tutorial</h3>
                                <p>Narrador: também chamado de foco narrativo, representa a "voz do texto", ou seja, determina quem está contando a história. Os tipos de narrador são: narrador observador (não faz parte da história, sendo somente um observador), narrador personagem (faz parte da história) e narrador onisciente (conhece todos os detalhes da narração).</p>
                            </div>

                            {/* Skills Content */}
                            <div className={toggleTab === 2 ? "content active-content":"content"}>
                                <h2>Skills</h2>
                                <p>Narrador: também chamado de foco narrativo, representa a "voz do texto", ou seja, determina quem está contando a história. Os tipos de narrador são: narrador observador (não faz parte da história, sendo somente um observador), narrador personagem (faz parte da história) e narrador onisciente (conhece todos os detalhes da narração).</p>

                                <div className='skills-row'>
                                    <div className='skills-column'>
                                        <div className='progress-wrap'>
                                            <h3>Developer</h3>
                                            <div className='progress'>
                                                <div className='progress-bar'>
                                                    <span>80%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='skills-column'>
                                        <div className='progress-wrap'>
                                            <h3>Designer</h3>
                                            <div className='progress'>
                                                <div className='progress-bar Designer'>
                                                    <span>90%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='skills-column'>
                                        <div className='progress-wrap'>
                                            <h3>Javascript</h3>
                                            <div className='progress'>
                                                <div className='progress-bar Javascript'>
                                                    <span>85%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='skills-column'>
                                        <div className='progress-wrap'>
                                            <h3>PhotoShop</h3>
                                            <div className='progress'>
                                                <div className='progress-bar PhotoShop'>
                                                    <span>88%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                         {/* Experience Context */}
                            <div className={toggleTab === 3 ? "content active-content":"content"}>
                                <div className='exp-column'>
                                    <h3>Web Developer</h3>
                                    <span>2014-2022</span>
                                    <p>Personagens: são aqueles que fazem parte da história e podem ser: personagens principais (protagonista e antagonista) ou personagens secundárias (adjuvante ou coadjuvante).</p>
                                </div>

                                <div className='exp-column'>
                                    <h3>Graphic Designer</h3>
                                    <span>2015-2022</span>
                                    <p>Personagens: são aqueles que fazem parte da história e podem ser: personagens principais (protagonista e antagonista) ou personagens secundárias (adjuvante ou coadjuvante).</p>
                                </div>

                                <div className='exp-column'>
                                    <h3>PhotoShop</h3>
                                    <span>2017-2022</span>
                                    <p>Personagens: são aqueles que fazem parte da história e podem ser: personagens principais (protagonista e antagonista) ou personagens secundárias (adjuvante ou coadjuvante).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default About;