import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/Carousel.scss"
import Logo from "../assets/Logo.svg";

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <Slider {...settings} className='slider'>
      <div>
        <img src={require('../assets/image1.png')} alt="Slide 1" />
      </div>
      <div>
        <img src={require('../assets/image2.png')} alt="Slide 2" />
      </div>
      <div>
        <img src={require('../assets/image3.png')} alt="Slide 3" />
      </div>
    </Slider>

    <div className='slider_box'>

      <div className='slider_logo'>
        <div>
          <img src={Logo} alt="LOGO" className="slider__icon" />
        </div>
        <div>
          LOGO
        </div>
      </div>

      <div className='slider_colored'>
      </div>

      <div className='slider_colored_text'>
        Lorem ipsum dolor sit amet
      </div>

      <div className='slider_bottom_text'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <p>scroll</p>

      <div className='scroll_line'></div>

    </div>
    </>
  );
};

export default Carousel;
