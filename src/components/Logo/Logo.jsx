import logo from '../../assets/logos/logo.png';
import { Link } from 'react-router-dom';
import { FaCrown } from "react-icons/fa";
const Logo = () => {
    return (
        <div className='flex items-center gap-2 md:gap-3 xl:gap-4'>
            <img src={logo} className='w-30 sm:w-35' alt="" />
            <Link to="" className='font-bold text-sm text-yellow-300 flex items-center gap-2 bg-yellow-600/20 p-2 rounded-md'>
                <FaCrown /> <span className='hidden sm:block md:hidden lg:block'>Subscribe</span>
            </Link>
    </div>
    );
};

export default Logo;