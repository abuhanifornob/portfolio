import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/images/Hanif.JPG";
const slides = [
  { image: image1 },
  { image: image1 },
  { image: image1 },
  { image: image1 },
  { image: image1 },
  { image: image1 },
  { image: image1 },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8" id="carousel">
      <h2 className="text-4xl font-bold text-center mb-8">Our Partners</h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-2">
            <img src={slide.image} alt={`Slide ${index}`} className="mx-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
