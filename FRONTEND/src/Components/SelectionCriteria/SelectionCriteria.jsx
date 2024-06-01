import React, { useEffect } from 'react'
import './SelectionCriteria.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const SelectionCriteria = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="selection-main ">
            <div className='selectcriteria-container'>
                <h1 className='main-heading'>Why Choose Us</h1>
                <div className="selection-cards-main">
                    <div className="selection-cards  " >
                        <div className="selection-icon">
                            <i className="fa-solid fa-flag" data-aos='fade-up'></i>
                        </div>
                        <div className="selection-card-details" >

                            <h3 data-aos='fade-up'>Best Price</h3>
                            <p data-aos='fade-up'>Your go-to for affordable, hassle-free vehicle rentals. Wide selection, competitive rates, easy booking. Travel smarter, save more!</p>
                        </div>

                    </div>
                    <div className="selection-cards">
                        <div className="selection-icon">
                            <i className="fa-solid fa-phone" data-aos='fade-up'></i>
                        </div>
                        <div className="selection-card-details">
                            <h3 data-aos='fade-up'>24 Hour Support</h3>
                            <p data-aos='fade-up'>Count on our 24-Hour Support for assistance anytime, anywhere. Our dedicated team is here to help you with any inquiries or issues, ensuring a smooth and stress-free rental experience.</p>
                        </div>

                    </div>
                    <div className="selection-cards" >
                        <div className="selection-icon">
                            <i className="fa-solid fa-certificate" data-aos='fade-up'></i>
                        </div>
                        <div className="selection-card-details">
                            <h3 data-aos='fade-up'>Verified Drivers</h3>
                            <p data-aos='fade-up'>In our vehicle rental system, Verified Drivers ensure safety and reliability. Rest assured knowing that our drivers meet stringent verification standards for your peace of mind and smooth travel experience.</p>
                        </div>

                    </div>
                    <div className="selection-cards" >
                        <div className="selection-icon">
                            <i className="fa-solid fa-circle-xmark" data-aos='fade-up'></i>
                        </div>
                        <div className="selection-card-details">
                            <h3 data-aos='fade-up'>Free Cancelation</h3>
                            <p data-aos='fade-up'>Enjoy flexibility with Free Cancellation. Book with confidence, knowing you can adjust your plans without penalty. Experience peace of mind and hassle-free reservation changes with our rental service.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SelectionCriteria;
