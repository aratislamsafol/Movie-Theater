import { MdPlayArrow } from "react-icons/md";
const StreamButton = ({children}) => {
    return (
         <button type="button" className="md:btn rounded bg-red-800 md:bg-red-800 md:text-white text-white text-xs sm:text-base md:text-lg p-2 md:p-4 lg:p-6 font-medium flex items-center">{children} <MdPlayArrow className="mt-[2px] md:mt-1"/></button>
    );
};

export default StreamButton;