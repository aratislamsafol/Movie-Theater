import { useState } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { GiOctoman } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';
import { IoIosEye, IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const CarouselContainer = ({
  allData,
  indexItem,
  detailsHover,
  aspectCss,
  showDots,
  autoPlaySpeed,
  contentName,
  productHover = ""
}) => {
  
  const [activeIndex, setActiveIndex] = useState(null); 

  const settings = {
    dots: showDots || false,
    infinite: true,
    speed: 500,
    cssEase: "ease-in-out",
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    touchThreshold: 15,
    autoplay: true,
    autoplaySpeed: autoPlaySpeed || 3000,
    responsive: [
      {
        breakpoint: 3000,
        settings: { slidesToShow: 6 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 464,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <div className="carousel-container overflow-hidden">
      <Slider {...settings}>
        {[...allData].map((data, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={data.id}
              className="p-2 group/item"
              onClick={() => setActiveIndex(index)} // Mobile touch only
              onMouseEnter={() => setActiveIndex(index)} 
              onMouseLeave={() => setActiveIndex(null)}  
            >
              <div className="rounded-xl block relative overflow-hidden transition-all duration-300 group-hover/item:scale-110">
                <Link
                  to=""
                  className={`block relative w-full h-full ${aspectCss ? "aspect-[1/1.4]" : "aspect-[1/.7]"}`}
                >
                  <img
                    src={data.cover_image || data.image}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute right-8 bottom-0 lg:-bottom-10 text-[3rem] md:text-[7rem] lg:text-[10rem] font-extrabold z-10 text-white select-none pointer-events-none">
                    {indexItem && index + 1}
                  </div>
                </Link>

                {detailsHover && !contentName && (
                  <div className="absolute bottom-0 left-0 w-full bg-black/75 text-white p-4 text-sm opacity-0 translate-y-6 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none group-hover/item:pointer-events-auto">
                    <p className='flex items-center gap-[2px]'>
                      <GiOctoman className='text-red-600' />
                      {data.title}
                    </p>
                    <div className="flex gap-[6px] py-1 mb-[6px]">
                      {Array.isArray(data.tags) && data.tags.map((tag, i) => (
                        <p key={i} className='bg-amber-600 p-[1px] px-[3px] rounded text-xs'>{tag}</p>
                      ))}
                    </div>
                    <Link to="/" className='p-1 px-2 rounded bg-red-800 text-sm text-white w-full flex justify-center'>Play Now</Link>
                  </div>
                )}

                {contentName && (
                  <Link className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none">
                    <p className="text-white text-center font-medium md:font-semibold lg:font-bold px-2">
                      {data.genres[0]}
                    </p>
                  </Link>
                )}

                {/* Product Hover Part */}
                {productHover && (
                  <div
                    className={`absolute bottom-0 left-0 w-full bg-black/75 text-white p-3 text-sm transition-all duration-300 ease-in-out ${
                      isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
                    }`}
                  >
                    <p className='text-red-600 text-center'>{data.name}</p>
                    <div className="hidden md:flex justify-between py-1 mb-[3px] text-sm">
                      Price: {data.price}
                      <p>{data.production_country}</p>
                    </div>
                    <div className="bg-amber-600 p-1 rounded-md flex justify-center gap-2 md:gap-4 text-sm md:text-lg">
                      <Link to=""><IoIosEye /></Link>
                      <Link to=""><IoMdHeart /></Link>
                      <Link to=""><IoCartOutline /></Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselContainer;
