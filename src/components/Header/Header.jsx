import Humburger from '../Humburger/Humburger';
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { CiSearch } from "react-icons/ci";
import OffCanvas from '../OffCanvas/OffCanvas';
import { useContext } from 'react';
import { OffCanvasContext } from '../../provider/OfCanvasProvider';
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
    const {isOpen} = useContext(OffCanvasContext);
    return (
        <div className=''>
            <div className="p-3 md:p-4 lg:p-5">
                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-3 justify-between items-center">
                    <div className="col-span-1 sm:col-span-3 md:col-span-1">
                        <Logo/>
                    </div>
                    <div className="md:col-span-1 hidden md:block">
                        <Menu/>
                    </div>
                    <div className="col-span-1 sm:col-span-2 md:col-span-1 flex gap-[6px] sm:gap-4 justify-self-end items-center">
                        <CiSearch className='text-white text-xl sm:text-2xl cursor-pointer'/>
                        <RiShoppingCartLine className='text-white text-base sm:text-xl cursor-pointer'/>
                        <button type="button" className='btn   btn-sm md:btn md:bg-red-800 md:text-white bg-red-800 text-sm md:text-base sm:text-base outline-none border-none md:border-none text-white'>Login</button>
                        <div className='justify-self-end'>
                            <Humburger />
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* offCanvas */}
            {isOpen && <OffCanvas />}
        </div>


    );
};

export default Header;