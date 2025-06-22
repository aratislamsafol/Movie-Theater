import { useContext, useState } from 'react';
import { Link, useLoaderData } from "react-router-dom"; 
import { FaPlay } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';

const ITEMS_PER_PAGE = 8;

const ViewAll = () => {
    const { movies, tv_series } = useLoaderData();
    const {setWishList} = useContext(AuthContext);
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const [activeCardIdx, setActiveCardIdx] = useState(null);

    if (!movies || !movies.movies || !Array.isArray(movies.movies)) {
        return (
            <div className="px-4 py-6 text-white text-center min-h-screen flex items-center justify-center bg-gray-900">
                <p className="text-xl">Nothing To Show</p>
            </div>
        );
    }

    console.log(tv_series);

    const allMovies = movies.movies;
    const visibleMovies = allMovies.slice(0, visibleCount);
    const hasMore = visibleCount < allMovies.length;

    const handleCardClick = (idx) => {
        setActiveCardIdx(activeCardIdx === idx ? null : idx);
    };

    const loadMore = () => {
        setVisibleCount(prev => prev + ITEMS_PER_PAGE);
    };

    return (
        <div className="min-h-screen bg-black text-white pb-8 pt-4 font-inter px-3 md:px-4 lg:px-5">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 py-5 sm:mb-4 md:mb-6 lg:mb-8 text-center">All Movies</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                {visibleMovies.map((movie, idx) => (
                    <div key={idx} className={`group relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform ${activeCardIdx === idx ? 'scale-110 z-20 shadow-2xl' : 'hover:scale-110 hover:z-20 hover:shadow-2xl'} cursor-pointer bg-gray-800`} onClick={() => handleCardClick(idx)}>

                        <div className="relative w-full aspect-[2/3] overflow-hidden">
                            <img
                                src={movie.cover_image}
                                alt={movie.title}
                                className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${activeCardIdx === idx ? 'scale-110 brightness-75' : 'group-hover:scale-110 group-hover:brightness-75'}`}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/400x600/1f2937/d1d5db?text=No+Image`;
                                }}
                            />
                        </div>

                        <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-4 pb-4 px-4 ${activeCardIdx === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0'} transition-all duration-300 ease-in-out`}>
                            <p className="text-gray-300 text-xs sm:text-sm font-medium mb-1">
                                {movie.genre || 'Action'} • {movie.category || 'Adventure'}
                            </p>

                            <h3 className="text-white text-base md:text-lg font-bold mb-2 truncate">
                                {movie.title}
                            </h3>

                            <div className="flex items-center text-gray-400 text-xs sm:text-sm mb-4">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>{movie.duration || '2:30'}</span>
                                <svg className="w-4 h-4 ml-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 9a9 9 0 00-9 9h-3a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2v-2a2 2 0 00-2-2h-3zm-6-6h.01M20.5 4.5h.01"></path></svg>
                                <span>{movie.language || 'English (UK)'}</span>
                            </div>

                            <div className="flex items-center justify-center space-x-3">
                                <Link to={`/item/${movie.id}`} className="flex-grow flex items-center justify-center text-sm md:text-sm bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-1 md:px-4 md:py-2 rounded-full transition-colors duration-300">
                                    <FaPlay className="text-xs md:text-sm mr-1 md:mr-2" /> Play
                                </Link>
                                
                                <button onClick={()=>setWishList(movie.id)} className="flex-shrink-0 p-1 md:p-2 border border-gray-600 rounded-full text-white hover:bg-gray-700 transition-colors duration-300 focus:outline-none">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
                <div className="flex justify-center mt-8">
                    <button onClick={loadMore} className="bg-stone-800 border border-red-700 hover:bg-stone-900 text-white hover:text-red-700 font-semibold py-2 px-6 rounded-full transition duration-300">
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default ViewAll;
