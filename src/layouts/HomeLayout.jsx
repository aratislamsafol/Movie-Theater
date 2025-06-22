import Banner from "../components/Banner/Banner";
import CarouselContainer from "../components/Carousel/Carousel";
import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CustomCarousel from "../components/CustomCarousel/CustomCarousel";
import Carousel2 from "../components/Carousel/Carousel2";
import _ from 'lodash';

const HomeLayout = () => {
    const { movies, tvSeries, upcomingMovies } = useLoaderData(); 
    
    const allData = {
    movies: movies?.movies || [],
    tvSeries: tvSeries?.tv_series || [],
    upcomingMovies: upcomingMovies.upcomingMovies || [],
    combineOfMoviesTV: [...(movies?.movies || []), ...(tvSeries?.tv_series || [])]
    };

    const [episodState, setEpisodeState] = useState([]); 
    
    useEffect(() => {
        const episodes = _.flatMap(allData.tvSeries, (series) =>
            (
                {
                    seriesImg: series.cover_image,
                    seriesId: series.id,
                    seriesTitle: series.title,
                    season: series.seasons,
                    description: series.description,
                    release_date: series.release_date
                })
            );
        setEpisodeState(episodes);
    }, [allData.tvSeries]);

    return (
        // wrapper
        <div className="bg-black">
            {/* container */}
            <div className="w-21/22 mx-auto">
                <section className="banner px-3 md:px-4 lg:px-5">
                    <CustomCarousel allData={allData.movies || []} />
                </section>
                <main>
                    {/* Top 10 Movies to Watch */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-2 md:py-4 px-3">Top 10 Movies to Watch</h2>
                        <CarouselContainer allData={allData.combineOfMoviesTV.sort((a, b) => b.rating - a.rating).slice(0, 10)} indexItem={true} detailsHover={false} aspectCss={true} showDots={true} autoPlaySpeed={2000}/>
                    </div>
                    {/* Only on Streamit */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-2 md:py-4 px-3">Only on Streamit</h2>
                            <Link to="/movies" className="text-red-700 mx-3 font-medium text-base md:text-lg">View All</Link>
                        </div>
                        <CarouselContainer className="px-2" allData={allData.tvSeries} indexItem={false} detailsHover={true} aspectCss={true} showDots={true} autoPlaySpeed={2400} contentName={false}/>
                    </div>
                    {/* Fresh Picks Just For You */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-2 md:py-4 px-3">Fresh Picks Just For You</h2>
                            <Link to="/movies" className="text-red-700 mx-3 font-medium text-base md:text-lg">View All</Link>
                        </div>
                        {/* Use allData.movies now, as it's directly from loader */}
                        <CarouselContainer className="px-2" allData={allData.movies} indexItem={false} detailsHover={true} aspectCss={false} showDots={false} autoPlaySpeed={3000}/>
                    </div>
                    {/* Upcoming Movies */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-2 md:py-4 px-3">Upcoming Movies</h2>
                            <Link to="/movies" className="text-red-700 mx-3 font-medium text-base md:text-lg">View All</Link>
                        </div>
                        {/* Now allData.upcomingMovies holds the data from the loader */}
                        <CarouselContainer className="px-2" allData={allData.upcomingMovies} indexItem={false} detailsHover={true} aspectCss={true} showDots={true} autoPlaySpeed={2400}/>
                    </div>
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <Banner/>
                    </div>
                    {/* Your Favorite Personality */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-2 md:py-4 px-3">Your Favorite Personality</h2>
                            <Link to="/movies" className="text-red-700 mx-3 font-medium text-base md:text-lg">View All</Link>
                        </div>
                        {/* Assuming you want to use upcomingMovies here as well, or you could load separate data for personalities */}
                        <CarouselContainer className="px-2" allData={allData.upcomingMovies} indexItem={false} detailsHover={true} aspectCss={true} showDots={true} autoPlaySpeed={2400}/>
                    </div>
                    {/* Popular Movies */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-2 md:py-4 px-3">Popular Movies</h2>
                            <Link to="/movies" className="text-red-700 mx-3 font-medium text-base md:text-lg">View All</Link>
                        </div>
                        <CarouselContainer className="px-2" allData={allData.movies.sort((a, b) => b.rating - a.rating)} indexItem={false} detailsHover={true} aspectCss={true} showDots={true} autoPlaySpeed={2400}/>
                    </div>
                    {/* TV Series banner */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <Carousel2 className="px-2" allData={episodState}/>
                    </div>
                    {/* Movie Genres */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-2 md:py-4 px-3">Movie Genre</h2>
                            <Link to="/movies" className="text-red-700 mx-3 font-medium text-base md:text-lg">View All</Link>
                        </div>
                        <CarouselContainer className="px-2" allData={allData.combineOfMoviesTV} indexItem={false} detailsHover={true} aspectCss={false} showDots={false} autoPlaySpeed={3000} contentName={true}/>
                    </div>
                    {/* Recommended for You */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-2 md:py-4 px-3">Recommended for You</h2>
                            <Link to="/movies" className="text-red-700 mx-3 font-medium text-base md:text-lg">View All</Link>
                        </div>
                        <CarouselContainer className="px-2" allData={allData.movies.sort((a, b) => b.rating - a.rating)} indexItem={false} detailsHover={true} aspectCss={true} showDots={false} autoPlaySpeed={2400}/>
                    </div>
                </main>
            </div>
        </div>

    );
};

export default HomeLayout;