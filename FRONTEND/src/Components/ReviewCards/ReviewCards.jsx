import React from 'react';
import './ReviewCards.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const reviewData = [
  {
    name: 'John Doe',
    img: 'john-doe.jpg',
    review: '"Amazing experience, will definitely buy again!"'
  },
  {
    name: 'John Doe',
    img: 'john-doe.jpg',
    review: '"Amazing experience, will definitely buy again!"'
  },
  {
    name: 'John Doe',
    img: 'john-doe.jpg',
    review: '"Amazing experience, will definitely buy again!"'
  },
  {
    name: 'John Doe',
    img: 'john-doe.jpg',
    review: '"Amazing experience, will definitely buy again!"'
  },
  {
    name: 'Jane Smith',
    img: 'jane-smith.jpg',
    review: '"Amazing experience, will definitely buy again!"'
  },
  // Add more review objects as needed
];

const ReviewCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // mobile breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 555, // mobile breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 320, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="reviewData-container-main">
      <div className='reviewData-container'>
        <div className="cards-main">
        <h1>Our Top Reviews</h1>
          <Slider {...settings} >
            {reviewData.map((review, index) => (
              <div className='cards' key={index}>
                <div className='reviewData-img'>
                  <img src={review.img} alt={review.name} />
                </div>
                <div className='reviewData-desc'>
                  <h3>{review.name}</h3>
                  <p>{review.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ReviewCards;
