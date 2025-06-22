import { Link, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import video from '../assets/video/Game of Thrones _ Official Series Trailer (HBO).mp4';
import { CiClock1 } from "react-icons/ci";
import Button from "../components/Button/Button";
import { MdPlayArrow } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdPlaylistPlay, MdFileDownload } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Modal from "../components/Modal/Modal";
import CarouselContainer from "../components/Carousel/Carousel";
import CarouselSm from "../components/Carousel/CarouselSm";

const SinglePage = () => {
    const { id } = useParams();
    
    const { movies, tvSeries } = useLoaderData();
    const [showModal, setShowModal] = useState({ readMore: false, watch: false, share: false, playlist: false, download: false });
    
    const movieData = useMemo(() => movies?.movies || [], [movies]);
    const tvData = useMemo(() => tvSeries?.tv_series || [], [tvSeries]);
    
    const [matchActors, setMatchActors] = useState([]);
    const [matchDirector, setMatchDirector] = useState([]);
    const [matchProduct, setMatchProduct] = useState([]);
    const [upComingMovie, setUpComingMovie] = useState([]);

    // upcoming movie data fetching
    useEffect(() => {
        const fetchUpComingMovieData = async () => {
            try {
                const res = await fetch('/dataset/upcomingMovies.json');
                const data = await res.json();
                setUpComingMovie(data.upcomingMovies || data || []);
            } catch (error) {
                console.error("Failed to fetch upcoming movies:", error);
                setUpComingMovie([]);
            }
        };

        fetchUpComingMovieData();
    }, []); 

    const upComingData = useMemo(() => upComingMovie, [upComingMovie]);
    const combinedData = useMemo(() => [...movieData, ...tvData, ...upComingData], [movieData, tvData, upComingData]);

    const targetData = useMemo(() => {
        return combinedData.find(data => data.id === Number(id));
    }, [combinedData, id]);


    // match crew Id
    useEffect(() => {
        if (targetData?.actor_ids) {
            const fetchActors = async () => {
                const res = await fetch('/dataset/actors.json');
                const data = await res.json();
                const matchData = data.actors.filter(actor => targetData.actor_ids.includes(actor.id))
                setMatchActors(matchData);
            };

            fetchActors();
        }
    }, [targetData]);

    // related Product 
    useEffect(() => {
        if (targetData?.relatedProductIds) {
            const fetchProducts = async () => {
                const res = await fetch('/dataset/product.json');
                const data = await res.json();
                const matchData = data.products.filter(product => targetData.relatedProductIds.includes(product.id))
                setMatchProduct(matchData);
            };

            fetchProducts();
        }
    }, [targetData]);

    // match director
    useEffect(() => {
        if (targetData?.director_id) {
            const fetchDirector = async () => {
                const res = await fetch('/dataset/director.json');
                const data = await res.json();
                const matchData = data.directors.filter(director => targetData.director_id === director.director_id);
                setMatchDirector(matchData);
            };

            fetchDirector();
        }
    }, [targetData]);

    // recomanded movies based on genre
    const matchedMovies = useMemo(() => {
        if (!targetData) return [];
        return combinedData.filter(movie =>
            movie.id !== targetData.id &&
            movie.genres.some(genre => targetData.genres.includes(genre)));
    }, [combinedData, targetData]);

    // Render a loading state if targetData is not yet available
    if (!targetData) {
        return <div className="text-white text-center p-10">Loading...</div>;
    }

    return (
        <>
            <div className="relative">
                <video src={video} className="w-full max-h-[100vh] h-10/12 object-cover" controls autoPlay muted />
                <div className="absolute inset-0 flex flex-col gap-1 justify-center text-gray-300 pointer-events-none px-8 bg-gradient-to-t from-black via-transparent to-transparent">
                    <div className="flex flex-row gap-2">
                        {targetData.genres.map((item, index) => (
                            <h4 key={index} className="text-sm md:text-base">{item}</h4>
                        ))}
                    </div>
                    
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{targetData.title}</h1>
                    <p className="text-xs hidden md:block md:text-sm font-thin w-3/6">{targetData.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsa impedit itaque provident veniam, quisquam, aperiam voluptatibus corrupti modi distinctio autem beatae libero animi. Enim sapiente, consectetur aperiam sint cumque ipsam harum hic maxime eligendi cum laboriosam quam illo est architecto consequatur qui asperiores voluptate perferendis expedita explicabo? Quidem, dolorum.</p>
                    <p className="md:hidden text-xs md:text-sm font-thin w-3/6">{targetData.description.slice(0,30)} ...</p>
                    <button onClick={()=>setShowModal({ ...showModal, readMore: true })} className="w-fit font-medium text-xs text-white px-[6px] p-[3px] bg-gray-800 rounded cursor-pointer pointer-events-auto">Read more</button>
                    <div className="md:flex gap-2 text-sm font-semibold hidden">
                        <p className="">{targetData.release_date.slice(0,4)}</p>
                        <p className="font-semibold flex items-center gap-1"><CiClock1 className=""/> {targetData.duration}</p>
                        <div className="font-semibold flex items-center gap-1">{targetData.rating}
                            <p className="bg-amber-600 text-black text-sm px-1 rounded">IMDb</p>
                        </div>
                        <p className="bg-gray-800 px-1 rounded text-xs font-normal flex items-center gap-1">{targetData.censor_rating}</p>
                    </div>
                    <div className="md:flex flew-row gap-2 hidden">
                        {targetData.tags.map((item, index) => (
                            <h4 key={index} className="text-xs md:text-sm">{item}</h4>
                        ))}
                    </div>

                    <div className="mt-3 md:flex gap-2 hidden">
                        <Button handlerFun={() => setShowModal({ ...showModal, watch: true })} bgColor="bg-red-800 md:bg-red-800">Start Watching <MdPlayArrow className=""/></Button>
                        <Button bgColor="bg-blue-500 md:bg-blue-500"><GoPlus/> Watch List</Button>
                        <button className="bg-[#141314] rounded-full flex items-center justify-center cursor-pointer pointer-events-auto w-10" onClick={() => setShowModal({ ...showModal, share: true })}><IoShareSocialSharp /></button>
                        <button onClick={() => setShowModal({ ...showModal, playlist: true })} className="bg-[#141314] rounded-full flex items-center justify-center cursor-pointer pointer-events-auto w-10"><MdPlaylistPlay/></button>
                        <button onClick={() => setShowModal({ ...showModal, download: true })} className="bg-[#141314] rounded-full flex items-center justify-center cursor-pointer pointer-events-auto w-10 "><MdFileDownload/></button>
                    </div>
                </div>
                
                {/* using ReadMore for modal */}
                <Modal
                    isOpen={showModal.readMore}
                    bgColor="bg-[#141314]"
                    positionDesign="items-center pt-0" 
                    width ="max-h-10/12 w-11/12 md:w-8/12 overflow-scroll"
                    onClose={() => setShowModal({ ...showModal, readMore: false })}
                >   
                    <div className="text-white p-4">
                        <h2 className="font-medium text-base sm:text-lg md:text-xl">{targetData.title}</h2>
                        <div className="mt-2 md:flex gap-2 text-sm font-semibold hidden">
                            <p className="">{targetData.release_date.slice(0,4)}</p>
                            <p className="font-semibold flex items-center gap-1"><CiClock1 className=""/> {targetData.duration}</p>
                            <div className="font-semibold flex items-center gap-1">{targetData.rating}
                                <p className="bg-amber-600 text-black text-sm px-1 rounded">IMDb</p>
                            </div>
                            <p className="bg-gray-800 px-1 rounded text-xs font-normal flex items-center gap-1">{targetData.censor_rating}</p>
                        </div>
                        <div className="flex flew-row items-center gap-2 py-1 mt-[5px]">
                            <p className="text-sm">Genres: </p>
                            {targetData.genres.map((item, index) => (
                                <h4 key={index} className="text-xs font-medium text-gray-400">{item}</h4>
                            ))}
                        </div>

                        <div className="flex flew-row items-center gap-1">
                            <p className="text-sm">Tags: </p>
                            {targetData.tags.map((item, index) => (
                                <h4 key={index} className="text-xs font-medium text-white p-[2px] px-2 bg-[#222121] rounded-md">{item}</h4>
                            ))}
                        </div>
                        <p className="text-sm py-2 text-gray-400">{targetData.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsa fugit commodi reprehenderit reiciendis quod illo similique error culpa quia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptate, at impedit maiores ea rem nam non delectus. Optio, necessitatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit ea, reprehenderit asperiores aspernatur itaque nam molestiae quae harum error possimus!</p>
                        <div className="flex flew-row items-center gap-2">
                            <p className="text-sm">Cast: </p>
                            {targetData.cast.map((item, index) => (
                                <Link to="" key={index} className="text-sm font-medium text-gray-400 hover:text-red-600">{item}</Link>
                            ))}
                        </div>
                         <div className="flex flew-row items-center gap-2">
                            <p className="text-sm">Crew: </p>
                            {matchActors.map((item, index) => (
                                <Link to="" key={index} className="text-sm font-medium text-gray-400 hover:text-red-600">{item.name}</Link>
                            ))}
                        </div>
                    </div>
                </Modal>

                {/* using watch for modal */}
                <Modal
                    isOpen={showModal.watch}
                    bgColor="bg-[#141314]"
                    positionDesign="items-start pt-0" 
                    width ="w-full md:w-10/12"
                    onClose={() => setShowModal({ ...showModal, watch: false })}
                >   
                    <video src={video} className="w-full object-cover" controls autoPlay muted />     
                </Modal>

                {/* using Modal For Share */}
                <Modal
                    isOpen={showModal.share}
                    bgColor="bg-[#141314]"
                    positionDesign="items-center"
                    onClose={() => setShowModal({ ...showModal, share: false })}
                >
                    <div className="p-4 text-white w-[300px]">
                        <h1 className="text-lg font-semibold">Share</h1>
                        <div className="flex justify-between py-4">
                            <div className="flex flex-col items-center gap-2">
                                <Link to="" target="_blank" rel="noopener noreferrer" className="bg-[#3b5998] p-3 rounded-full w-fit">
                                    <FaFacebookF className="text-white" />
                                </Link>
                                <p className="text-xs">Facebook</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Link to="" target="_blank" rel="noopener noreferrer" className="bg-[#00acee] p-3 rounded-full">
                                    <FaTwitter className="text-white" />
                                </Link>
                                <p className="text-xs">Twitter</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Link to="" target="_blank" rel="noopener noreferrer" className="bg-[#0077b5] p-3 rounded-full">
                                    <FaLinkedinIn className="text-white" />
                                </Link>
                                <p className="text-xs">Linkedin</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Link to="" target="_blank" rel="noopener noreferrer" className="bg-[#25d366] p-3 rounded-full">
                                    <FaWhatsapp className="text-white" />
                                </Link>
                                <p className="text-xs">Whatsapp</p>
                            </div>
                        </div>
                    </div>
                </Modal>

                {/* using Modal for wishList Alert */}
                <Modal
                    isOpen={showModal.playlist}
                    bgColor="bg-[#141314]"
                    positionDesign="items-center"
                    onClose={() => setShowModal({ ...showModal, playlist: false })}
                >
                    <div className="p-4 text-white w-[300px]">
                        <p className="text-sm">You should <Link to="/login" className="text-red-700">login</Link> to create a playlist.</p>
                    </div>
                </Modal>

                {/* using Modal for Download */}
                <Modal
                    isOpen={showModal.download}
                    bgColor="bg-[#141314]"
                    positionDesign="items-center"
                    onClose={() => setShowModal({ ...showModal, download: false })}
                >
                    <div className="p-4 text-white w-[300px]">
                        <p className="text-sm">You should <Link to="/login" className="text-red-700">login</Link> to Download this Video </p>
                    </div>
                </Modal>
            </div>

            {/* Recommended */}
            <div className="my-2 sm:my-3 md:my-6 px-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg md:text-xl text-white font-semibold py-2 px-2">Recommended</h2>
                    <Link to="/movies" className="text-red-700 mx-3 font-medium text-xs md:text-sm">View All</Link>
                </div>
                <CarouselContainer className="px-2" allData={matchedMovies} indexItem={false} detailsHover={true} aspectCss={true} showDots={true} autoPlaySpeed={2400}/>
            </div>

            {/* Starring */}
            <div className="px-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg md:text-xl text-white font-semibold py-2 md:py-4 px-2">Starring</h2>
                    <Link to="" className="text-red-700 mx-3 font-medium text-xs md:text-sm">View All</Link>
                </div>
                <CarouselSm data={matchActors}/>
            </div>

            {/* Crew */}
            <div className="px-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg md:text-xl text-white font-semibold py-2 ">Crew</h2>
                    <Link to="" className="text-red-700 mx-3 font-medium text-xs md:text-sm ">View All</Link>
                </div>
                <CarouselSm data={matchDirector}/>
            </div>

            {/* Recommended Movies */}
            <div className="">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg sm:text-lg md:text-xl text-white font-semibold py-2 md:py-4 px-3">Top Rated</h2>
                    <Link to="/movies" className="text-red-700 mx-3 font-medium text-xs md:text-sm">View All</Link>
                </div>
                <CarouselContainer className="px-2" allData={[...combinedData].sort((a, b) => b.rating - a.rating)} indexItem={false} detailsHover={true} aspectCss={true} showDots={false} autoPlaySpeed={2400}/>
            </div>

            {/* Related Product */}
            <div className="">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg sm:text-lg md:text-xl text-white font-semibold py-2 md:py-4 px-3">Recommended Product</h2>
                    <Link to="" className="text-red-700 mx-3 font-medium text-xs md:text-sm">View All</Link>
                </div>
                <CarouselContainer className="px-2" allData={matchProduct} indexItem={false} detailsHover={false} aspectCss={true} showDots={false} autoPlaySpeed={2400} productHover={true}/>
            </div>
            
            {/* Upcoming Movies */}
            <div className="">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg sm:text-lg md:text-xl text-white font-semibold py-2 md:py-4 px-3">Upcoming Movies</h2>
                    <Link to="/movies" className="text-red-700 mx-3 font-medium text-xs md:text-sm">View All</Link>
                </div>
                <CarouselContainer className="px-2" allData={upComingMovie} indexItem={false} detailsHover={true} aspectCss={true} showDots={false} autoPlaySpeed={2400} productHover={false}/>
            </div>
        </>
    );
};

export default SinglePage;