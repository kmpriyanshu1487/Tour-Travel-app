import React, { useEffect } from 'react'
import './Footer.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className='footer'>
            <div className="upper-row">
                <div className='upper-row-left' data-aos='fade-right'><h1>EXPLORER</h1>
                    <p data-aos='fade-down'>A Tour and Travel Agency</p>
                </div>
                <div>
                    <a href="/home" >
                        <i className='fa-brands fa-facebook-square' data-aos='fade-left'></i></a>
                    <a href="/home" >
                        <i className='fa-brands fa-instagram-square' data-aos='fade-down'></i></a>
                    <a href="/home" >
                        <i className='fa-brands fa-twitter-square' data-aos='fade-right'></i></a>

                </div>
            </div>
            <div className="lower-row">
                <div>
                    <h4 data-aos='fade-down'>GET CONNECTED</h4>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>Connectivity</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>Dashbord</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>IoT SIM Card</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>All Version</a>

                </div>
                <div>
                    <h4 data-aos='fade-down'>PRICING</h4>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>Pricing Overview</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>flexible Data</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>High Value Data</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>Coverage Map</a>

                </div>
                <div>
                    <h4 data-aos='fade-down'>COMPANY</h4>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>About US</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>Blog</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>Partnerships</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>Carrers</a>

                </div>
                <div>
                    <h4 data-aos='fade-down'>DEVELOPERS</h4>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>Forum</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>Projects</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>Open Source</a>


                </div>
                <div>
                    <h4 data-aos='fade-down'>SOCIAL</h4>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>Twitter</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>Facebook</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>LInkedIn</a>
                    <a href="/home" data-aos='fade-right'><i class="fa fa-caret-right" aria-hidden="true"></i>GitHub</a>

                </div>
            </div>
        </div>
    )
}

export default Footer;
