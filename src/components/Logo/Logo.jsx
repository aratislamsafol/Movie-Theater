import logo from '../../assets/logos/logo.png';
import { Link } from 'react-router-dom';
import { FaCrown } from "react-icons/fa";
const Logo = () => {
    return (
        <Link to="/" className='flex items-center gap-2 md:gap-3 xl:gap-4'>
            <img src={logo} className='w-24 sm:w-35' alt="" />
            <Link to="/pricing/pricing-plan" className='font-bold text-sm text-yellow-300 flex items-center gap-1 sm:gap-2 bg-yellow-600/20 p-1 sm:p-2 rounded-md'>
                <FaCrown /> <span className='hidden sm:block md:hidden lg:block'>Subscribe</span>
            </Link>
    </Link>
    );
};

export default Logo;