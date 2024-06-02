import React, { useEffect } from 'react';
import './Achievment.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Achievment = () => {

    useEffect(() => {
        Aos.init();
    }, [])


    useEffect(() => {
        const counts = document.querySelectorAll('.count');
        const speed = 87;

        counts.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;


                const increment = target / speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count + increment);

                    setTimeout(updateCount, 1);
                } else {

                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }, []);

    return (
        <div className='achievment-container'>
            <h1 >Our Achievement</h1>
            <div className="achivement-main">
                <div className="achievment-card counter" >
                    <h2 className='count' data-target='4026' data-aos='fade-up'>0</h2>
                    <p data-aos='fade-up'>Active Member</p>
                </div>
                <div className="achievment-card counter">
                    <h2 className='count' data-target='2036' data-aos='fade-up'>0</h2>
                    <p data-aos='fade-up'>Car Color</p>
                </div>
                <div className="achievment-card counter" >
                    <h2 className='count' data-target='5062' data-aos='fade-up'>0</h2>
                    <p data-aos='fade-up'>Car Model</p>
                </div>
                <div className="achievment-card counter" >
                    <h2 className='count' data-target='500' data-aos='fade-up'>0</h2>
                    <p data-aos='fade-up'>Positive Rating</p>
                </div>
            </div>
        </div>
    )
}

export default Achievment;
