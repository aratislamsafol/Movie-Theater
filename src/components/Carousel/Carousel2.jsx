import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { SlBadge } from "react-icons/sl";
import { RiMovie2AiLine } from "react-icons/ri";
import StreamButton from "../Button/StreamButton";
import "./carousel.css";
import Tab from "../Tab/Tab";

const Carousel2 = ({ allData }) => {
    const [currentData, setCurrentData] = useState(null);
    const [showEpisodes, setShowEpisodes] = useState(false);
    const [showTrigger, setShowTrigger] = useState(true);

    useEffect(() => {
        if (allData && allData.length > 0) {
            setCurrentData(allData[0]);
        }
    }, [allData]);

    
    useEffect(() => {
        if (showEpisodes) {
            setShowTrigger(false); 
        } else {
            const timeout = setTimeout(() => {
                setShowTrigger(true); 
            }, 500); 

            return () => clearTimeout(timeout); 
        }
    }, [showEpisodes]);

    const settings = {
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        cssEase: 'linear',
        afterChange: (current) => {
            setCurrentData(allData[current]);
        }
    };

    if (!allData || allData.length === 0) return null;

    return (
        <div className="relative overflow-hidden rounded-2xl">
            {/* Slider */}
            <Slider {...settings}>
                {allData.map((data, index) => (
                    <div key={data.seriesId || index} className="relative h-96 md:h-[540px] overflow-hidden rounded-2xl">
                        <img
                            src={data.seriesImg}
                            alt={index}
                            className="w-full h-full object-cover rounded-2xl"
                        />

                        {/* Overlay content */}
                        <div className="absolute inset-0 bottom-1/2 md:left-1/12 px-3 md:px-0 translate-y-1/2 w-full md:w-5/12 text-gray-200 flex items-center justify-center z-10">
                            <div>
                                <h4 className="text-base md:text-xl lg:text-2xl font-medium flex items-center gap-2">
                                    <SlBadge className="text-2xl md:text-3xl lg:text-5xl border p-1 rounded" />  #{index + 1} in Series Today
                                </h4>
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white py-1 md:py-2 lg:py-3">{data.seriesTitle}</h1>
                                <p className="text-sm md:text-base lg:text-lg">{data.description}</p>
                                <div className="flex gap-4 mt-1 md:mt-3">
                                    <span className="text-sm md:text-base lg:text-lg font-medium">{data.release_date}</span>
                                    <span className="text-sm md:text-base lg:text-lg font-medium flex items-center gap-2">
                                        <RiMovie2AiLine />{data.season.length} Season
                                    </span>
                                </div>
                                <div className="mt-1 md:mt-3 lg:mt-4">
                                    <StreamButton>Stream Now</StreamButton>
                                </div>
                            </div>
                        </div>

                        {/* Episode drawer */}
                        <div className={`md:hidden absolute top-0 right-0 h-full w-[280px] md:w-[340px] bg-black/90 text-white z-20 transition-transform duration-500 ease-in-out ${showEpisodes ? "translate-x-0" : "translate-x-full"} rounded-l-2xl`}>
                            <div className="p-5 flex justify-between items-center border-b border-gray-700">
                                <h2 className="text-xl font-bold md:hidden">All Episodes</h2>
                                <button onClick={() => setShowEpisodes(false)} className="text-lg">✖</button>
                            </div>
                            <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-60px)]">
                                <div  className="border-b border-gray-700 pb-2">
                                     {currentData ? (
                                        <Tab tabContent={currentData.season} />
                                        ) : (
                                            <p>Loading...</p>
                                        )}
                                    </div>
                                </div>
                        </div>

                        {/* for big device */}
                        <div className="hidden md:block md:absolute md:right-[3%] bottom-1/2 translate-y-1/2 w-2/5 bg-gray-800/80 rounded-xl">
                        
                            {currentData ? (
                                <Tab tabContent={currentData.season} topicsName ="ALL EPISOD"/>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>

                        {showTrigger && (
                            <div
                                className="absolute bottom-1/2 translate-y-1/2 right-0 bg-red-600 rounded-tl-md rounded-bl-md cursor-pointer z-30"
                                onClick={() => setShowEpisodes(true)}
                            >
                                <div className="transition-all duration-300 delay-150 ease-in-out relative whitespace-nowrap tracking-widest [writing-mode:vertical-rl] px-4 sm:px-10 rotate-180">
                                    <p className="text-white text-xs sm:text-sm font-normal md:hidden">ALL EPISOD</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel2;
