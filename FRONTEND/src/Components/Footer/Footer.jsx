import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="upper-row">
                <div className='upper-row-left'><h1>EXPLORER</h1>
                    <p>A Tour and Travel Agency</p>
                </div>
                <div>
                    <a href="/home">
                        <i className='fa-brands fa-facebook-square'></i></a>
                    <a href="/home">
                        <i className='fa-brands fa-instagram-square'></i></a>
                    <a href="/home">
                        <i className='fa-brands fa-twitter-square'></i></a>

                </div>
            </div>
            <div className="lower-row">
                <div>
                    <h4>GET CONNECTED</h4>
                    <a href="/home">Connectivity</a>
                    <a href="/home">Dashbord</a>
                    <a href="/home">IoT SIM Card</a>
                    <a href="/home">All Version</a>

                </div>
                <div>
                    <h4>PRICING</h4>
                    <a href="/home">Pricing Overview</a>
                    <a href="/home">flexible Data</a>
                    <a href="/home">High Value Data</a>
                    <a href="/home">Coverage Map</a>

                </div>
                <div>
                    <h4>COMPANY</h4>
                    <a href="/home">About US</a>
                    <a href="/home">Blog</a>
                    <a href="/home">Partnerships</a>
                    <a href="/home">Carrers</a>

                </div>
                <div>
                    <h4>DEVELOPERS</h4>
                    <a href="/home">Forum</a>
                    <a href="/home">Projects</a>
                    <a href="/home">Open Source</a>


                </div>
                <div>
                    <h4>SOCIAL</h4>
                    <a href="/home">Twitter</a>
                    <a href="/home">Facebook</a>
                    <a href="/home">LInkedIn</a>
                    <a href="/home">GitHub</a>

                </div>
            </div>
        </div>
    )
}

export default Footer;
