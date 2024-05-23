import React from 'react'
import mountain1 from '../../Assests/PopularPlaces/srinagar.jpg'
import mountain2 from '../../Assests/PopularPlaces/srinagar2.jpg'
import mountain3 from '../../Assests/PopularPlaces/gulmarg1.jpg'
import mountain4 from '../../Assests/PopularPlaces/gulmarg2.jpg'
import './Distination.css'
import Distinationdata from '../Distinationdata/Distinationdata'
const Distination = () => {
    return (
        <div className='distination'>
            <h1>Popular Distination</h1>
            <p>Some of Our Popular Destination To Explore The India

            </p>
            <Distinationdata className="first-des"
                heading="SRINAGAR, JAMMU & KASHMIR"
                text="Srinagar, the crown jewel of Kashmir, invites travelers into a world of breathtaking natural beauty and cultural richness. The city's centerpiece, Dal Lake, adorned with vibrant Shikaras and houseboats, offers a tranquil retreat amidst the majestic Himalayas. Mughal gardens like Nishat Bagh and Shalimar Bagh showcase exquisite landscaping and architectural splendor, while historic sites like Hazratbal Shrine and Jama Masjid reflect the city's spiritual heritage.

                The bustling markets of Lal Chowk and Residency Road tempt visitors with an array of handicrafts, including Pashmina shawls, intricate woodwork, and exquisite jewelry, providing a glimpse into Kashmir's artisanal tradition.
                
                Srinagar's cuisine tantalizes the taste buds with its rich flavors, featuring aromatic dishes like Rogan Josh and Yakhni."
                img1={mountain1}
                img2={mountain2}
            />

            <Distinationdata className="first-des-reverse"
                heading="GULMARG, JAMMU & KASHMIR"
                text="Gulmarg, nestled in the pristine Himalayan ranges of Kashmir, is a mesmerizing destination for travelers seeking natural beauty and adventure. This scenic hill station, often referred to as the Meadow of Flowers, captivates visitors with its lush green meadows, snow-capped peaks, and enchanting landscapes.

                During summer, Gulmarg transforms into a paradise for outdoor enthusiasts. The meadows come alive with vibrant wildflowers, offering picturesque settings for leisurely strolls and picnics. Adventure seekers can indulge in activities like trekking, mountain biking, and golfing amidst the breathtaking scenery.
                As winter blankets Gulmarg with a thick layer of snow, it becomes a haven for skiing and snowboarding enthusiasts from around the world. The Gulmarg Gondola, one of the highest cable cars in the world, provides access to thrilling slopes for both beginners and seasoned skiers. The powdery snow and panoramic views make for an unforgettable skiing experience.
                "
                img1={mountain3}
                img2={mountain4}
            />


        </div>
    )
}

export default Distination;
