import React from 'react'
import './CarTypes.css'
import Hero from '../../Components/Hero/Hero'
import Footer from '../../Components/Footer/Footer'
import rentImg from '../../Assests/vehicle/rentImg.jpg'
import Navbar from '../../Components/Navbar/Navbar'
import swiftImg from '../../Assests/vehicle/Cars/Dezire.jpg'
import safariImg from '../../Assests/vehicle/Cars/Tata_safari.jpg'
import vernaImg from '../../Assests/vehicle/Cars/Verna.jpg'
import mahxuvImg from '../../Assests/vehicle/XuvCars/mahindra_xuv700 (1).jpg'
import tharImg from '../../Assests/vehicle/XuvCars/thar.jpg'
import MGImg from '../../Assests/vehicle/XuvCars/Hector.jpg'
import InnovaImg from '../../Assests/vehicle/Cars/innova.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const carTypes = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={rentImg}
                title="Reant  a car"
                btnClass="hide"
            />
            <div className="carTypes">
                <div className='cartype-container'>
                    <h1>Available Cars Types </h1>
                    <div className="cartype-container-main">
                        <div className="carTypes-second ">
                            <h2>Availavle cars</h2>


                            <div className="simple-car-types ">

                                <Slider {...settings}>
                                    
                                    <div className="card cars">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card cars">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card cars">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card cars">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card cars">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card ">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card cars">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </Slider>
                            </div>

                        </div>
                        <div className="carTypes-second">
                            <h2>Available xuv cars</h2>
                            <div className="xuv-cars-types">
                                <Slider {...settings}>
                                <div className="card cars">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card cars">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card cars">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card cars">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card cars">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card ">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="card cars">
                                        <h3 className="card__title">Tata safar
                                        </h3>
                                        <img src={InnovaImg} alt="swiftImg" />
                                        <p className="card__content">Iconic Indian SUV blending ruggedness, comfort, and versatility, equipped with modern features, spacious cabin, and robust performance on/off-road.</p>
                                        <div className="card__date">
                                            TS-#8945
                                        </div>
                                        <div className="card__date">
                                            6-seater
                                        </div>
                                        <div className="card__date">
                                            Rs. 15/km
                                        </div>
                                        <div className="card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div> */}
            </div>
            <Footer />
        </>
    )
}

export default carTypes;
