import React from 'react'
import './SelectionCriteria.css'
const SelectionCriteria = () => {
    return (
        <div className="selection-main">
        <div className='selectcriteria-container'>
            <h1 className='main-heading'>Why Choose Us</h1>

            <div className="selection-cards-main">
                <div className="selection-cards">
                    <div className="selection-icon">
                        <i className="fa-solid fa-flag" ></i>
                    </div>
                    <div className="selection-card-details">

                        <h3>Best Price</h3>
                        <p>Your go-to for affordable, hassle-free vehicle rentals. Wide selection, competitive rates, easy booking. Travel smarter, save more!</p>
                    </div>

                </div>
                <div className="selection-cards">
                    <div className="selection-icon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="selection-card-details">
                        <h3>24 Hour Support</h3>
                        <p>Count on our 24-Hour Support for assistance anytime, anywhere. Our dedicated team is here to help you with any inquiries or issues, ensuring a smooth and stress-free rental experience.</p>
                    </div>

                </div>
                <div className="selection-cards">
                    <div className="selection-icon">
                        <i className="fa-solid fa-certificate"></i>
                    </div>
                    <div className="selection-card-details">
                        <h3>Verified Drivers</h3>
                        <p>In our vehicle rental system, Verified Drivers ensure safety and reliability. Rest assured knowing that our drivers meet stringent verification standards for your peace of mind and smooth travel experience.</p>
                    </div>

                </div>
                <div className="selection-cards">
                    <div className="selection-icon">
                        <i className="fa-solid fa-circle-xmark"></i>
                    </div>
                    <div className="selection-card-details">
                        <h3>Free Cancelation</h3>
                        <p>Enjoy flexibility with Free Cancellation. Book with confidence, knowing you can adjust your plans without penalty. Experience peace of mind and hassle-free reservation changes with our rental service.</p>
                    </div>

                </div>

            </div>
            </div>
        </div>
    )
}

export default SelectionCriteria
