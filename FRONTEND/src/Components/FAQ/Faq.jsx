import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import './Faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const faq = [
        {
            Ques: 'How do I book a tour?',
            Ans: `Booking a tour is easy! Simply navigate to our website and select the tour package you're interested in. Follow the prompts to choose your preferred dates, number of participants, and any additional options. Once you've completed the booking process, you'll receive a confirmation email with all the details.`
        },
        {
            Ques: 'What payment methods do you accept?',
            Ans: 'We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Payment options may vary depending on the tour package and your location.'
        },
        {
            Ques: 'Are tours guided?',
            Ans: 'Yes, most of our tours include experienced guides who will accompany you throughout the journey. They are knowledgeable about the destinations and will enhance your experience with insights and local expertise.'
        },
        {
            Ques: 'How do I contact customer support?',
            Ans: 'Our customer support team is available via email, phone, or live chat to assist you with any questions or concerns you may have. Visit our "Contact Us" page for more information on how to reach us.'
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActive = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="container">
            <div className='faq-main'>
                <h2 className='title'>FAQs <span></span></h2>
                {faq.map((item, index) => (
                    <div className={`faq ${activeIndex === index ? 'active' : ''}`} key={index} onClick={() => toggleActive(index)}>
                        <div className="question" >
                            <h3 data-aos='fade-left'>Question: {item.Ques}</h3>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        <div className="answer" >
                            <p data-aos='fade-left'>{item.Ans}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
