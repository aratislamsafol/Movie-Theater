import { useState, useRef } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { FaClock } from "react-icons/fa6";

const CustomCarousel = ({ allData }) => {
  const [index, setIndex] = useState(0);

  const startX = useRef(0);
  const isDragging = useRef(false);
  const threshold = 50;

  const handleNextClick = () => {
    setIndex((prev) => (prev < allData.length - 1 ? prev + 1 : 0));
  };

  const handlePreviousClick = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : allData.length - 1));
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > threshold) {
      handleNextClick();
    } else if (diff < -threshold) {
      handlePreviousClick();
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = startX.current - e.clientX;

    if (diff > threshold) {
      handleNextClick();
    } else if (diff < -threshold) {
      handlePreviousClick();
    }
  };

  const handleMouseLeave = (e) => {
    if (isDragging.current) {
      isDragging.current = false;
      const diff = startX.current - e.clientX;

      if (diff > threshold) {
        handleNextClick();
      } else if (diff < -threshold) {
        handlePreviousClick();
      }
    }
  };

  return (
    <div className="relative">  
      <div
        className="w-full h-screen overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {allData.map((item, idx) => (
            <div key={idx} className="min-w-full h-full relative">
              <img
                src={item.cover_image}
                alt={item.title || "slide"}
                className="w-full h-full object-cover z-2 mask-r-from-60% lg:mask-r-from-5% mask-l-from-70%"
                draggable={false}
              />
              <div className="absolute bottom-1/2 translate-y-1/2 left-5 text-white bg-black/60 p-4 rounded-lg w-11/12 md:max-w-xl z-20">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  {item.title}
                </h2>
                <div className="flex gap-2 py-3">
                  <div className="px-2 text-sm rounded bg-gray-900 text-white border-none font-semibold">
                    {item.censor_rating}
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                    <span className="bg-yellow-600 px-1 font-bold text-gray-900 rounded w-fit text-sm">
                      IMDb
                    </span>
                  </div>
                  <span className="text-sm md:text-base flex gap-1 items-center">
                    <FaClock /> {item.duration}
                  </span>
                </div>
                <p className="text-base text-gray-300 font-medium mb-3">
                  {item.description || "No description available."}
                </p>
                <p className="mb-2 text-sm md:text-base">
                  <span className="text-red-400 text-sm">Tags:</span> {item.tags}
                </p>
                <p className="mb-2">
                  <span className="text-pink-400 text-sm md:text-base">Genres:</span> {item.genres}
                </p>
                <p className="mb-3 sm:mb-4 md:mb-6 text-sm md:text-base">
                  <span className="text-orange-400">Starring:</span> {item.cast}
                </p>
                <button className="bg-red-600 hover:bg-red-700 transition px-3 sm:px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded w-fit">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Thumbnail and Buttons */}
      <div className="hidden md:block absolute right-0 bottom-1/2 translate-y-1/2 z-10 h-8/12 bg-black/70 p-10 rounded-md overflow-hidden w-5/12 pb-14">
        <div className="flex gap-2 h-full rounded-md">
          {allData.map((item, idx) => 
            <div key={idx} onClick={()=>setIndex(idx)} className="w-1/2 h-21/22 flex-shrink-0 rounded-md overflow-hidden border-2 border-white/30 hover:border-white transition-all duration-300" style={{ transform: `translateX(-${index * 100}%)` }}>
              <img src={item.cover_image} className="h-full w-full object-cover" alt={item.title} />
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={handlePreviousClick}
            className="p-2 bg-black text-white rounded-full hover:bg-gray-900 cursor-pointer border border-white"
            aria-label="Previous Slide"
          >
            <MdArrowBackIosNew className="text-lg" />
          </button>
          <button
            onClick={handleNextClick}
            className="p-2 bg-black text-white rounded-full hover:bg-gray-900 cursor-pointer border border-white"
            aria-label="Next Slide"
          >
            <MdArrowForwardIos className="text-lg" />
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default CustomCarousel;
