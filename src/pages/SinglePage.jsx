import { useLoaderData, useParams } from "react-router-dom";
import { useMemo } from "react";
import video from '../assets/video/Game of Thrones _ Official Series Trailer (HBO).mp4';
import { CiClock1 } from "react-icons/ci";
import Button from "../components/Button/Button";
import { MdPlayArrow } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdPlaylistPlay, MdFileDownload } from "react-icons/md";

const SinglePage = () => {
    const { id } = useParams();
    const { movies, tvSeries } = useLoaderData();

    const movieData = useMemo(() => movies?.movies || [], [movies]);
    const tvData = useMemo(() => tvSeries?.tv_series || [], [tvSeries]);

    const combinedData = useMemo(() => [...movieData, ...tvData], [movieData, tvData]);


    const targetData = useMemo(() => {
        return combinedData.find(data => data.id === Number(id));
    }, [combinedData, id]);

    if (!targetData) return <div>Loading...</div>;

    return (
        <div className="relative">
            <video
                src={video}
                className="w-full max-h-[100vh] h-10/12 object-cover"
                controls
                autoPlay
                muted
            />
            <div className="absolute inset-0 flex flex-col gap-1 justify-center text-gray-300 pointer-events-none px-8 bg-gradient-to-t from-black via-transparent to-transparent">
                <div className="flex flew-row gap-2">
                    {targetData.genres.map((item) => (
                        <h4 className="text-sm md:text-base">{item}</h4>
                    ))}
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{targetData.title}</h1>
                <p className="text-xs md:text-sm font-thin">{targetData.description}</p>
                <button className="w-fit font-medium text-xs text-white px-[6px] p-[3px] bg-gray-800 rounded cursor-pointer pointer-events-auto">Read more</button>
                <div className="md:flex gap-2 text-sm font-semibold hidden">
                    <p className="">{targetData.release_date.slice(0,4)}</p>
                    <p className="font-semibold flex items-center gap-1"><CiClock1 className=""/> {targetData.duration}</p>
                    <div className="font-semibold flex items-center gap-1">{targetData.rating}
                        <p className="bg-amber-600 text-black text-sm px-1 rounded">IMDb</p>
                    </div>
                    <p className="bg-gray-800 px-1 rounded text-xs font-normal flex items-center gap-1">{targetData.censor_rating}</p>
                </div>
                <div className="md:flex flew-row gap-2 hidden">
                    {targetData.tags.map((item) => (
                        <h4 className="text-xs md:text-sm">{item}</h4>
                    ))}
                </div>

                <div className="mt-3 md:flex gap-2 hidden">
                    <Button bgColor="bg-red-800 md:bg-red-800">Start Watching <MdPlayArrow className=""/></Button>
                    <Button bgColor="bg-gray-900 md:bg-gray-900"><GoPlus/> Watch List</Button>
                    <button className="bg-gray-900 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto w-10"><IoShareSocialSharp /></button>
                    {/* if login then you can download */}
                    <button className="bg-gray-900 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto w-10"><MdPlaylistPlay/></button>
                    {/* if login then you can download */}
                    <button className="bg-gray-900 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto w-10"><MdFileDownload/></button>
                    
                </div>
             
            </div>
        </div>
    );
};

export default SinglePage;
