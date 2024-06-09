import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Emajoh from "../assets/images/Emajoh.png";
import event_management from "../assets/images/event_management.png";
import LifeLineHealth from "../assets/images/LifeLineHealth.png";
import Natural_Seen from "../assets/images/Natural Seen.png";
import News_Protal from "../assets/images/News Protal.png";
import studay_Plan from "../assets/images/studay_Plan.png";

const slides = [
  { image: Emajoh, title: "Online Shop Platfrom" },
  { image: event_management, title: "Event Management " },
  { image: LifeLineHealth, title: "Healt Services" },
  { image: Natural_Seen, title: "Natural Place View" },
  { image: News_Protal, title: "News Portal" },
  { image: studay_Plan, title: "Day Wise Studay Paln" },
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
      <h2 className="text-4xl font-bold text-center mb-8">
        My Project Gallary{" "}
      </h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-2">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="mx-auto w-60 h-60"
            />
            <h3 className="text-center font-mono text-2xl mt-6">
              {slide.title}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
