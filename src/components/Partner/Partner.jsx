import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partner = () => {
  // Custom Arrows
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-r from-black/80 to-black/40 p-3 rounded-full hover:scale-110 transition"
      onClick={onClick}
    >
      <FaArrowLeft className="text-white text-lg" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-l from-black/80 to-black/40 p-3 rounded-full hover:scale-110 transition"
      onClick={onClick}
    >
      <FaArrowRight className="text-white text-lg" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    cssEase: "ease-in-out",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  const carouselImages = [
    {
      id: 1,
      img: 'https://placehold.co/200x150/000000/FFFFFF?text=FILM%20DIRECTOR%0Acompany',
      alt: 'ফিল্ম ডিরেক্টর কোম্পানি লোগো'
    },
    {
      id: 2,
      img: 'https://placehold.co/200x150/000000/FFFFFF?text=CINEMA%0APRODUCTIONS',
      alt: 'সিনেমা প্রোডাকশনস লোগো'
    },
    {
      id: 3,
      img: 'https://placehold.co/200x150/000000/FFFFFF?text=Glasses%20Movie',
      alt: 'গ্লাসেস মুভি লোগো'
    },
    {
      id: 4,
      img: 'https://placehold.co/200x150/000000/FFFFFF?text=BLACK%20WOLF%0APictures',
      alt: 'ব্ল্যাক উলফ পিকচার্স লোগো'
    },
    {
      id: 5,
      img: 'https://placehold.co/200x150/000000/FFFFFF?text=PLAY%0Ayour tagline goes here',
      alt: 'প্লে লোগো'
    },
    {
      id: 6,
      img: 'https://placehold.co/200x150/000000/FFFFFF?text=Another%0ALogo',
      alt: 'আরেকটি নমুনা লোগো'
    }
  ];

  return (
    <div className="relative px-4 md:px-8 md:py-12 mt-4 bg-black/90">
      <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-2 md:mb-7 lg:mb-10 tracking-wide">Our Partners</h2>
      <Slider {...settings}>
        {carouselImages.map((item) => (
          <div key={item.id} className="px-3">
            <div className="rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 shadow-md hover:shadow-xl group">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-[150px] object-contain p-2 transition-transform duration-500 group-hover:rotate-1 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partner;
