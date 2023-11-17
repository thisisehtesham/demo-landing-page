import React from 'react'
import '../styles/Home.scss';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import arrowright from '../assets/arrowright.svg';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";

const Home = () => {
    return (
        <div>
            {/* Header */}

            <Navbar/>

            {/* Hero Section */}

            <Carousel />

            {/* Section 1 */}

            <section className='section-1'>
                <div className='reactangle_container'>
                    <div className='reactangle'>
                    </div>
                    <div className='rectangle_text'>
                        <div className='rectangle_text_1'>Lorem</div>
                        <div className='rectangle_text_2'>subtitle</div>
                    </div>
                    <div className="examples-area">
                        <a href='#' className="examples-card">
                            <h3 className="card-text">01</h3>
                            <h1 className="card-text">Lorem ipsum dolor sit</h1>
                            <h3 id='bottom-line'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        </a>
                        <a href='#' className="examples-card">
                            <h3 className="card-text">02</h3>
                            <h1 className="card-text">Lorem ipsum dolor sit</h1>
                            <h3 id='bottom-line'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        </a>
                        <a href='#' className="examples-card">
                            <h3 className="card-text">03</h3>
                            <h1 className="card-text">Lorem ipsum dolor sit</h1>
                            <h3 id='bottom-line'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        </a>
                    </div>
                </div>
            </section>


            {/* Section 2 */}

            <section className='section-2'>
                <div className='body-2'>
                    <div className='reactangle-2'></div>
                    <div className='box'>
                        <div className='left-box'>
                        <img src={require('../assets/image4.png')} alt="image-left" />
                        </div>
                        <div className='right-box'>
                            <h1>Lorem ipsum </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className='text-icon'>
                                <h3>Lorem ipsum</h3>
                                <img src={arrowright} alt="Arrow Right" className='arrow-right' />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Section */}

            <section className='logo-section'>
                <div className='logo-main'>
                </div>
            </section>

            {/* Footer */}

            <footer className='footer'>
                <div className='footer-links'>
                    <Link to="/">Home</Link>
                    <Link to="/Page1">Page 1</Link> 
                    <Link to="/Page2">Page 2</Link>
                </div>

                <div className='line'></div>

                <div className='icons'>
                    <a href='https://thisisehtesham.github.io/' target='blank'>
                        <FaFacebook />
                    </a>
                    <a href='https://thisisehtesham.github.io/' target='blank'>
                        <AiFillTwitterCircle />
                    </a>
                    <a href='https://thisisehtesham.github.io/' target='blank'>
                        <GrInstagram />
                    </a>
                    <a href='https://thisisehtesham.github.io/' target='blank'>
                        <FaLinkedin />
                    </a>
                </div>

                <div className='copyright'>© Ehtesham Ahmad. All rights reserved</div>
            </footer>
        </div>
    )
}

export default Home

