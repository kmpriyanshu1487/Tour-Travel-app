import React from 'react'
import uttkarkhand from '../../Assests//uttkarakhand.jpg'
import himachalImg from '../../Assests/himachal p.jpg'
import jammuImg from '../../Assests/j&k.jpg'
import TripData from '../TripData/TripData'
import './Trip.css'


const Trip = () => {

   
    return (
        <div className='trip'>
            <h1>Recent Trip</h1>
            <p>some of our famous trips</p>

            <div className="trip-card">
                <TripData
                    img={uttkarkhand}
                    heading="Trip to uttrakhand"
                    text="Embark on a journey to Uttarakhand, where the majestic Himalayas beckon. Trek through lush forests, witness breathtaking vistas of snow-capped peaks, and immerse yourself in the spirituality of ancient temples. Discover tranquility by pristine lakes and experience the magic of this Himalayan paradise, where adventure and serenity converge."

                />
                <TripData
                    img={himachalImg}
                    heading="Trip to Himachal Pradesh"
                    text="Himachal Pradesh, nestled in the Himalayas, enchants with its serene landscapes, towering peaks, and lush valleys. Known for its vibrant culture, it offers adventure seekers trekking, skiing, and paragliding opportunities. The state's charming hill stations like Shimla and Manali beckon with their colonial architecture and picturesque vistas. "

                />
                <TripData
                    img={jammuImg}
                    heading="Trip to Kashmir"
                    text="Embark on an enchanting odyssey to Kashmir, a paradise on Earth. Traverse through picturesque valleys, adorned with blooming saffron fields and meandering rivers. Marvel at the majestic snow-capped peaks, cruise on tranquil lakes, and embrace the warm hospitality. Discover a land of timeless beauty and cultural richness at every turn. "

                />
            </div>
        </div>
    )
}

export default Trip;
