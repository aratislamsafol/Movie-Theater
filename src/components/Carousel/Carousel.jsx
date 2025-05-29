import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
  const { movies, tvSeries } = useLoaderData();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const movieData = movies?.movies || [];
    const tvData = tvSeries?.tv_series || [];
    setAllData([...movieData, ...tvData]);
  }, [movies, tvSeries]);

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={false}
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
        {
          [...allData].sort((a, b)=> b.rating- a.rating).slice(0, 10).map((data, index) => <Link key={data.id} to="" className='rounded'>
          <img src={data.cover_image} className='w-full aspect-4/5 object-cover rounded-xl' alt="" />
          <div className="absolute right-8 bottom-0 lg:-bottom-10 text-[3rem] md:text-[7rem] lg:text-[10rem] font-extrabold z-10 text-white">
            {index+1}
          </div>
        </Link>)
        }
    </Carousel>
  );
};

export default CarouselContainer;
