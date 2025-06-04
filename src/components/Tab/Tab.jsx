import { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";

const Tab = ({ tabContent, topicsName }) => {
  const [tab, setTab] = useState(tabContent[0]);
  console.log(tabContent)
  // When tabContent changes, reset tab to first
  useEffect(() => {
    if (tabContent?.length > 0) {
      setTab(tabContent[0]);
    }
  }, [tabContent]);

  return (
    <div className="md:p-5 text-white">
      <h2 className="text-lg font-bold pb-2">{topicsName}</h2>
      <div className="flex gap-1 sm:gap-2 md:gap-3 flex-wrap mb-4">
        
        {tabContent.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setTab(item)}
            className={`py-1 px-2 md:py-2 md:px-4 rounded md:font-semibold lg:font-bold font-normal text-xs md:text-sm xl:text-base border ${
              tab === item ? "bg-gray-600 text-white" : "bg-gray-200 text-black"
            }`}
          >
            Season {index + 1}
          </button>
        ))}
      </div>

      <div className="mt-2 overflow-auto scrollbar-hide max-h-[500px] pr-2 space-y-4">
        {tab.episodes.map((episode, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            <img
              src={episode.cover_image}
              alt={episode.title}
              className="w-20 md:w-24 xl:w-32 h-14 md:h-22 xl:h-24 rounded-lg object-cover"
            />
            <div>
              <h2 className=" text-sm md:text-base xl:text-lg md:font-medium xl:font-semibold">{episode.title}</h2>
              <div className="flex md:flex-col gap-2">
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                  <IoMdTime />
                  {episode.duration}
                </p>
                <button type="button" className="w-fit text-white bg-red-800 rounded-md px-2 p-1 mt-1 md:mt-0 text-xs  xl:text-base">Play Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
