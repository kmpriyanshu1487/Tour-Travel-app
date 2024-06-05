import React from 'react'
import './Tempotraveller.css'
import { Link } from 'react-router-dom';
import tempo1 from '../../Assests/Tempo/tempo.png'
import tempo2 from '../../Assests/Tempo/tempo1.png'
import tempo3 from '../../Assests/Tempo/tempo2.png'
import tempo4 from '../../Assests/Tempo/tempo3.png'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const Tempotraveller = () => {
    return (
        <>
            <Navbar />

            <div className='tempo-container'>
                <div className="tempo-imgs">
                    <div className="img">
                        <img src={tempo1} alt="" />
                    </div>
                    <div className="img">
                        <img src={tempo2} alt="" />
                    </div>
                    <div className="img">
                        <img src={tempo3} alt="" />
                    </div>
                    <div className="img">
                        <img src={tempo4} alt="" />
                    </div>
                </div>
                <div className="tempo-details">
                    <p>Group travelling in a big city on your own is quite challenging. There is a lot of traffic on the road and hardly any room for you to stretch yourself if you are travelling in a car or public transport. In such situations, travelling seems nothing less than a bothersome activity. What can be a great expedition turns into a headache! But what if we told you that there is a way you can ease your city group travel and in fact, enjoy it with utmost comfort and luxury?

                        Wondering how is that possible?

                        It’s simple. Switch to tempo traveller rentals.  </p>
                    <Link to='/booking'> <button id='tempo-btn' type="button" >Book Now</button></Link>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tempotraveller
