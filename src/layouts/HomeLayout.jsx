import Banner from "../components/Banner/Banner";
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