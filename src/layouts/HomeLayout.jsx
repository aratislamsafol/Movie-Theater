import Banner from "../components/Banner/Banner";
import CarouselContainer from "../components/Carousel/Carousel";
import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';


import Header from "../components/Header/Header";
import CustomCarousel from "../components/CustomCarousel/CustomCarousel";
const HomeLayout = () => {
      const { movies, tvSeries } = useLoaderData();
      const [allData, setAllData] = useState({ movies: [], tvSeries: [], upcomingMovies: [], combineOfMoviesTV:[] });

    //  combine movies & tvSeries Data 
    useEffect(() => {
        const movieData = movies?.movies || [];
        const tvData = tvSeries?.tv_series || [];

        setAllData(prevData => ({
            ...prevData,
            movies: movieData,
            tvSeries: tvData,
            combineOfMoviesTV: [...movieData, ...tvData]
        }));
    }, [movies, tvSeries]);

    //  upComing Movies
    useEffect(()=>{
        fetch('/dataset/upcomingMovies.json')
            .then(res => res.json())
            .then(data => setAllData(prevData => ({...prevData, upcomingMovies: data})))
    },[])
    

    return (
        // wrapper
        <div className="w-full bg-black">
            {/* container */}
            <div className="w-21/22 mx-auto">
                <header>
                    <Header></Header>
                </header>
                <section className="banner px-3 md:px-4 lg:px-5">
                    <CustomCarousel allData={allData.movies || []} />
                </section>
                <main>
                    {/* Top 10 Movies to Watch */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-4 md:py-6 lg:py-8 px-3">Top 10 Movies to Watch</h2>
                        <CarouselContainer allData={allData.combineOfMoviesTV.sort((a, b) => b.rating - a.rating).slice(0, 10)} indexItem={true} detailsHover={false} aspectCss={true} showDots={true} autoPlaySpeed={2000}/>
                    </div>
                    {/* Only on Streamit */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-4 md:py-6 lg:py-8 px-3">Only on Streamit</h2>
                            <Link to="" className="text-red-700 mx-3 font-medium text-base md:text-lg">View All</Link>
                        </div>
                        <CarouselContainer className="px-2" allData={tvSeries.tv_series} indexItem={false} detailsHover={true} aspectCss={true} showDots={true} autoPlaySpeed={2400}/>
                    </div>
                    {/* Fresh Picks Just For You */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-4 md:py-6 lg:py-8 px-3">Fresh Picks Just For You</h2>
                            <Link to="" className="text-red-700 mx-3 font-medium text-base md:text-lg">View All</Link>
                        </div>
                        <CarouselContainer className="px-2" allData={movies.movies} indexItem={false} detailsHover={true} aspectCss={false}  showDots={false} autoPlaySpeed={3000}/>
                    </div>
                    {/* Upcoming Movies */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-4 md:py-6 lg:py-8 px-3">Upcoming Movies</h2>
                            <Link to="" className="text-red-700 mx-3 font-medium text-base md:text-lg">View All</Link>
                        </div>
                        <CarouselContainer className="px-2" allData={allData.upcomingMovies} indexItem={false} detailsHover={true} aspectCss={true}  showDots={true} autoPlaySpeed={2400}/>
                    </div>
                    {/* Custom Carosel slider banner */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <Banner/>
                        
                    </div>
                    {/* Your Favorite Personality */}
                    {/* Popular Movies */}
                    {/* parallex slider banner */}
                    {/* Movie Genres */}
                    {/* Recommended for You */}
                    {/* Top Picks for You */}
                </main>
                <footer>

                </footer>
            </div>
        </div>

    );
};

export default HomeLayout;