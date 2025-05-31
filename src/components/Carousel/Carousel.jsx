import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { GiOctoman } from "react-icons/gi";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const CarouselContainer = ({ deviceType, allData, indexItem, detailsHover, aspectCss, showDots, autoPlaySpeed }) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={showDots}
      responsive={responsive}
      ssr={true}
      infinite={false}
      autoPlay={deviceType !== "mobile"}
      autoPlaySpeed={autoPlaySpeed}
      keyBoardControl={true}
      aspectCss = "aspect-[4/5]"
      customTransition="all .5s"
      transitionDuration={500}
      containerClass="carousel-container"
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="px-2"
    >
      {[...allData].map((data, index) => (
          <Link
            key={data.id}
            to=""
            className={`group rounded transform transition duration-300 hover:scale-105 block relative overflow-hidden ${!aspectCss? aspectCss:"aspect-[1]"}`}
          >
            <img
              src={data.cover_image}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute right-8 bottom-0 lg:-bottom-10 text-[3rem] md:text-[7rem] lg:text-[10rem] font-extrabold z-10 text-white select-none">
              {indexItem && index + 1}
            </div>

            {detailsHover && <div className="absolute bottom-0 left-0 w-full bg-black/75 text-white p-4 text-sm opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
              <p className='flex items-center gap-[2px]'><GiOctoman className='text-red-600'/>{data.title}</p>
              <div className="flex gap-[6px] py-1 mb-[6px]">
                  {Array.isArray(data.tags) && data.tags.map((tag, index) => (
                    <p key={index} className='bg-amber-600 p-[1px] px-[3px] rounded text-xs'>{tag}</p>
                  ))}
              </div>
               <Link to="/" className='p-1 px-2 rounded md:bg-red-800 md:text-white bg-red-800 text-sm outline-none border-none md:border-none text-white w-full flex justify-center'>Play Now</Link>
            </div>}
          </Link>
        ))}
    </Carousel>
  );
};

export default CarouselContainer;
