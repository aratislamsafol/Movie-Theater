import { useEffect, useRef, useState } from 'react';
import { FaClock } from "react-icons/fa6";
import './banner.css';
import { useLoaderData } from 'react-router-dom';
import gsap from 'gsap';

const Banner = () => {
  const { movies, tvSeries } = useLoaderData();
  const [allData, setAllData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const [thumbnailPage, setThumbnailPage] = useState(0);
  const thumbnailsPerPage = 3;

  const bannerRef = useRef(null); 

  useEffect(() => {
    const movieData = movies?.movies || [];
    const tvData = tvSeries?.tv_series || [];
    setAllData([...movieData, ...tvData]);
    setActiveIndex(0);
    activeIndexRef.current = 0;
    setThumbnailPage(0);
  }, [movies, tvSeries]);

  useEffect(() => {
    if (allData.length === 0) return;

    const interval = setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % allData.length;
      animateBannerChange();
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }, 6000);

    return () => clearInterval(interval);
  }, [allData]);

  const animateBannerChange = () => {
    if (!bannerRef.current) return;

    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
    );
  };

  const activeMovie = allData[activeIndex];

  return (
    <div className="relative lg:flex w-full bg-black text-white overflow-hidden mx-auto">
      <div className="relative w-full lg:w-3/4 p-5 md:p-10 mt-2 flex flex-col justify-center overflow-hidden rounded-xl">
        {activeMovie && (
          <>
            <img src={activeMovie.cover_image}  alt={activeMovie.title} className="absolute inset-0 w-full h-full object-cover z-0 mask-r-from-60% lg:mask-r-from-40% mask-l-from-70%" loading="lazy" draggable={false}/>
            <div ref={bannerRef} className="relative w-full bg-black/70 p-3 sm:p-4  md:p-6 rounded-xl z-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">{activeMovie.title}</h1>
              <p className="mb-4 text-gray-300 md:hidden">
                {activeMovie.description.length > 50 ? activeMovie.description.slice(0, 50) + "..." : activeMovie.description}
              </p>
              <p className="mb-4 text-gray-300 hidden md:block">
                {activeMovie.description}
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4">
                <div className='flex gap-2 items-center'>
                  <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                  <span className="bg-yellow-600 px-2 py-1 rounded w-fit text-xs font-bold sm:text-base">IMDb</span>
                </div>
                <span className='text-sm md:text-base flex gap-1 items-center'><FaClock />  {activeMovie.duration}</span>
              </div>
              <p className="mb-2 text-sm md:text-base"><span className="text-red-400 text-sm">Tags:</span> {activeMovie.tags}</p>
              <p className="mb-2"><span className="text-pink-400 text-sm md:text-base">Genres:</span> {activeMovie.genres}</p>
              <p className="mb-3 sm:mb-4 md:mb-6 text-sm md:text-base"><span className="text-orange-400">Starring:</span> {activeMovie.cast}</p>
              <button className="bg-red-600 hover:bg-red-700 transition px-3 sm:px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded w-fit">Play Now</button>
            </div>
          </>
        )}

        {/* Mobile Arrows */}
        <div className="lg:hidden flex justify-between items-center absolute bottom-[45%] px-4 z-50 w-full mx-auto left-0 right-0 pointer-events-auto">
          <button
            onClick={() => {
              const prev = activeIndex === 0 ? allData.length - 1 : activeIndex - 1;
              animateBannerChange();
              setActiveIndex(prev);
              activeIndexRef.current = prev;
            }}
            className="text-white text-3xl p-2 rounded-full"
            aria-label="Previous"
          >‹</button>
          <button
            onClick={() => {
              const next = (activeIndex + 1) % allData.length;
              animateBannerChange();
              setActiveIndex(next);
              activeIndexRef.current = next;
            }}
            className="text-white text-3xl p-2 rounded-full"
            aria-label="Next"
          >›</button>
        </div>
      </div>

      {/* Right Thumbnails */}
      <div className="hidden lg:flex lg:flex-col md:w-1/4 pt-2 overflow-hidden">
        <div className="flex justify-between items-center mb-2 px-4">
          <button
            onClick={() => setThumbnailPage((prev) => Math.max(prev - 1, 0))}
            className="text-white text-2xl"
            disabled={thumbnailPage === 0}
          >‹</button>
          <button
            onClick={() => setThumbnailPage((prev) => (prev + 1) * thumbnailsPerPage < allData.length ? prev + 1 : prev)}
            className="text-white text-2xl"
          >›</button>
        </div>

        <div className="space-y-4 custom-scrollbar px-2">
          {allData
            .slice(thumbnailPage * thumbnailsPerPage, (thumbnailPage + 1) * thumbnailsPerPage)
            .map((movie, index) => {
              const globalIndex = thumbnailPage * thumbnailsPerPage + index;
              return (
                <div
                  key={globalIndex}
                  className={`cursor-pointer bg-[#111] rounded-xl overflow-hidden shadow-lg transition hover:scale-105 ${activeIndex === globalIndex ? 'ring-2 ring-red-500' : ''}`}
                  onClick={() => {
                    animateBannerChange();
                    setActiveIndex(globalIndex);
                    activeIndexRef.current = globalIndex;
                  }}
                >
                  <img src={movie.cover_image} className="w-full h-40 object-cover" alt={movie.title} />
                  <div className="p-3">
                    <h2 className="font-semibold">{movie.title}</h2>
                    <p className="text-sm text-gray-400">{movie.release_date}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
