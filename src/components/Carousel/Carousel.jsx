import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../assets/images/migration-portrait-.webp';
import img2 from '../../assets/images/the-first-of-us-portrait.webp';
import img3 from '../../assets/images/the-hunter-portrait.webp';
import img4 from '../../assets/images/yoshi-portrait.webp';
import { Link } from 'react-router-dom';

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
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const CarouselContainer = ({ deviceType }) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={deviceType !== "mobile"}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5s"
      transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="px-2" 
    >
        <Link to="/1" className='rounded'>
          <img src={img1} className='w-full aspect-4/5 object-cover rounded-xl' alt="" />
          <div className="absolute right-8 bottom-0 lg:-bottom-10 text-[3rem] md:text-[7rem] lg:text-[10rem] font-extrabold z-10 text-white">
            1
          </div>
        </Link>
        <Link to="/2" className='rounded'>
          <img src={img2} className='w-full aspect-4/5 object-cover rounded-xl' alt="" />
          <div className="absolute right-8 bottom-0 lg:-bottom-10 text-[3rem] md:text-[7rem] lg:text-[10rem] font-extrabold z-10 text-white">
            2
          </div>
        </Link>
         <Link to="/3" className='rounded'>
          <img src={img3} className='w-full aspect-4/5 object-cover rounded-xl' alt="" />
           <div className="absolute right-8 bottom-0 lg:-bottom-10 text-[3rem] md:text-[7rem] lg:text-[10rem] font-extrabold z-10 text-white">
            3
          </div>
        </Link>
        <Link to="/4" className='rounded'>
          <img src={img4} className='w-full aspect-4/5 object-cover rounded-xl' alt="" />
           <div className="absolute right-8 bottom-0 lg:-bottom-10 text-[3rem] md:text-[7rem] lg:text-[10rem] font-extrabold z-10 text-white">
            4
          </div>
        </Link>
        <Link to="/5" className='rounded'>
          <img src={img4} className='w-full aspect-4/5 object-cover rounded-xl' alt="" />
           <div className="absolute right-8 bottom-0 lg:-bottom-10 text-[3rem] md:text-[7rem] lg:text-[10rem] font-extrabold z-10 text-white">
            4
          </div>
        </Link>
    </Carousel>
  );
};

export default CarouselContainer;
