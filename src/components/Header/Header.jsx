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
        <div>
            <div className="p-3 md:p-4 lg:p-5">
                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-3 justify-between items-center">
                    <div className="col-span-1 sm:col-span-3 md:col-span-1">
                        <Logo/>
                    </div>
                    <div className="md:col-span-1 hidden md:block">
                        <Menu/>
                    </div>
                    <div className="col-span-1 sm:col-span-2 md:col-span-1 flex gap-4 justify-self-end items-center">
                        <CiSearch className='text-white text-2xl cursor-pointer'/>
                        <RiShoppingCartLine className='text-white text-xl cursor-pointer'/>
                        <button type="button" className='btn bg-red-800 outline-none border-none text-white'>Logo</button>
                        <Humburger />
                    </div>
                </div>
            </div>
            {/* offCanvas */}
            {isOpen && <OffCanvas />}
        </div>


    );
};

export default Header;