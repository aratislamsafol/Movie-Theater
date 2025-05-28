import Banner from "../components/Banner/Banner";
import CarouselContainer from "../components/Carousel/Carousel";

import Header from "../components/Header/Header";
const HomeLayout = () => {
    return (
        // wrapper
        <div className="w-full bg-black">
            {/* container */}
            <div className="w-21/22 mx-auto">
                <header>
                    <Header></Header>
                </header>
                <section className="banner px-3 md:px-4 lg:px-5">
                    <Banner/>
                </section>
                <main>
                    {/* Top 10 Movies to Watch */}
                    <div className="my-2 sm:my-3 md:my-6 lg:my-8 xl:my-10">
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-4 md:py-6 lg:py-8 px-3">Top 10 Movies to Watch</h2>
                        <CarouselContainer/>
                    </div>
                    {/* Only on Streamit */}
                    {/* Fresh Picks Just For You */}
                    {/* Upcoming Movies */}
                    {/* parallex slider banner */}
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