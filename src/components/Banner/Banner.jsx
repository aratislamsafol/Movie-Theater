import { useEffect, useState } from 'react';
import img1 from '../../assets/images/adventure.webp';
import img2 from '../../assets/images/animation.webp';
import img3 from '../../assets/images/action.webp';
import './banner.css';

const movies = [
  {
    title: "The First Of Us",
    duration: "2h : 59m",
    description: "In a post-apocalyptic world, a small group of survivors uncover the origins of humanity’s downfall...",
    tags: "Family, Hitman, Horror",
    genres: "Action, Adventure, Crime",
    starring: "Jordan Grant, Jeff Bridges, James Stewart",
    image: img1,
    release: "Now Showing",
  },
  {
    title: "Minions",
    duration: "1h : 30m",
    description: "Minions are back in a wild ride full of bananas and mischief.",
    tags: "Family, Comedy, Kids",
    genres: "Animation, Comedy",
    starring: "Steve Carell, Pierre Coffin",
    image: img2,
    release: "January 2025",
  },
  {
    title: "Action Hero",
    duration: "1h : 40m",
    description: "An ex-soldier becomes a reluctant hero in a battle against corruption.",
    tags: "Action, Hero, Thriller",
    genres: "Action, Drama",
    starring: "Tom Cruise, Scarlett Johansson",
    image: img3,
    release: "Coming Soon",
  }
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 6000); // every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const activeMovie = movies[activeIndex];

  return (
    <div className="relative lg:flex h-[90vh] w-full bg-black text-white overflow-hidden mx-auto">

      {/* Left Content With Image */}
      <div className="relative w-full lg:w-2/3 p-10 mt-2 flex flex-col justify-center overflow-hidden rounded-xl">
        <img
          src={activeMovie.image}
          alt={activeMovie.title}
          className="absolute inset-0 w-full h-full object-cover z-0 mask-r-from-60% lg:mask-r-from-40% mask-l-from-70%"
          loading="lazy"
          draggable={false}
        />
        {/* Overlay with content */}
        <div className="relative bg-black/70 p-6 rounded-xl z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{activeMovie.title}</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gray-700 px-2 py-1 rounded">NC-17</span>
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span className="bg-yellow-600 px-2 py-1 rounded">IMDb</span>
            <span>{activeMovie.duration}</span>
          </div>
          <p className="mb-4 text-gray-300">{activeMovie.description}</p>
          <p className="mb-2"><span className="text-red-400">Tags:</span> {activeMovie.tags}</p>
          <p className="mb-2"><span className="text-pink-400">Genres:</span> {activeMovie.genres}</p>
          <p className="mb-6"><span className="text-orange-400">Starring:</span> {activeMovie.starring}</p>
          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded w-fit">Play Now</button>
        </div>

        {/* Mobile Arrows for Manual Navigation */}
        <div className="lg:hidden flex justify-between items-center absolute bottom-[45%] px-4 z-50 w-full mx-auto left-0 right-0 pointer-events-auto">
          <button
            onClick={() =>
              setActiveIndex((prevIndex) =>
                prevIndex === 0 ? movies.length - 1 : prevIndex - 1
              )
            }
            className="text-white text-3xl p-2 rounded-full w-5"
            aria-label="Previous"
          >
            ‹
          </button>

          <button
            onClick={() =>
              setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length)
            }
            className=" text-white text-3xl p-2 rounded-full"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      {/* Right Thumbnails */}
      <div className="hidden lg:block md:w-1/3 pr-4 pt-2 overflow-y-auto space-y-4 custom-scrollbar">
        {movies.map((movie, index) => (
          <div
            key={index}
            className={`cursor-pointer bg-[#111] rounded-xl overflow-hidden shadow-lg mx-3 transition hover:scale-105 ${
              activeIndex === index ? 'ring-2 ring-red-500' : ''
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={movie.image} className="w-full h-48 object-cover" alt={movie.title} />
            <div className="p-3">
              <h2 className="font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-400">{movie.release}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Banner;
