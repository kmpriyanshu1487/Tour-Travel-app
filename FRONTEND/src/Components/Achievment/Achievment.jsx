import React, { useEffect } from 'react';
import './Achievment.css';

const Achievment = () => {

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
            <h1>Our Achievement</h1>
            <div className="achivement-main">
                <div className="achievment-card counter">
                    <h2 className='count' data-target='4026'>0</h2>
                    <p>Active Member</p>
                </div>
                <div className="achievment-card counter">
                    <h2 className='count' data-target='2036'>0</h2>
                    <p>Car Color</p>
                </div>
                <div className="achievment-card counter">
                    <h2 className='count' data-target='5062'>0</h2>
                    <p>Car Model</p>
                </div>
                <div className="achievment-card counter">
                    <h2 className='count' data-target='500'>0</h2>
                    <p>Positive Rating</p>
                </div>
            </div>
        </div>
    )
}

export default Achievment;
