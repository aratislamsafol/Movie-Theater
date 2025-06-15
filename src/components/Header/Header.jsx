import Humburger from '../Humburger/Humburger';
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import { CiSearch } from "react-icons/ci";
import OffCanvas from '../OffCanvas/OffCanvas';
import { useContext, useState } from 'react';
import { OffCanvasContext } from '../../provider/OfCanvasProvider';
import { RiShoppingCartLine } from "react-icons/ri";
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa'; // Import a default user icon

const Header = ({ location }) => {
    const { user, logOut } = useContext(AuthContext);
    const { isOpen } = useContext(OffCanvasContext);
    const [showModal, setShowModal] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    // console.log(user?.photoURL); // Log photoURL for debugging

    // Default image if user.photoURL is not available
    const defaultUserImage = 'https://via.placeholder.com/40x40?text=User'; // Placeholder image URL

    return (
        <div className="bg-black">
            <div className="p-3 md:p-4 lg:p-5">
                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-3 justify-between items-center">
                    <div className="col-span-1 sm:col-span-3 md:col-span-1">
                        <Logo />
                    </div>
                    <div className="md:col-span-1 hidden md:block">
                        <Menu />
                    </div>
                    <div className="col-span-1 sm:col-span-2 md:col-span-1 flex gap-[6px] sm:gap-4 justify-self-end items-center">
                        <button type='button' onClick={() => setShowModal(true)}>
                            <CiSearch className='text-white text-xl sm:text-2xl cursor-pointer' />
                        </button>
                        <RiShoppingCartLine className='text-white text-base sm:text-xl cursor-pointer' />

                        {user ? (
                            <div className='relative'>
                                <button
                                    type='button'
                                    onClick={() => setDropDown(!dropDown)}
                                    className='relative w-10 h-10 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200' // Added styling for the button itself
                                >
                                    {user.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt="User Profile"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null; // Prevent infinite loop if default image also fails
                                                e.target.src = defaultUserImage; // Fallback to a placeholder if user image fails to load
                                            }}
                                        />
                                    ) : (
                                        // Default icon if no photoURL
                                        <FaUserCircle className='w-full h-full text-gray-400 bg-gray-700 p-1' />
                                    )}
                                </button>
                                {dropDown && (
                                    <div className='absolute top-full right-0 mt-2 w-max min-w-[120px] bg-gray-200 text-red-700 rounded-md shadow-lg overflow-hidden z-50'>
                                        <div className="flex flex-col">
                                            <Link
                                                to="/profile"
                                                className="block px-4 py-2 text-center text-sm transition-all ease-in hover:bg-red-700 hover:text-white duration-100"
                                                onClick={() => setDropDown(false)} // Close dropdown on click
                                            >
                                                Profile
                                            </Link>
                                            <button
                                                type='button'
                                                className="block px-4 py-2 text-center text-sm transition-all ease-in hover:bg-red-700 hover:text-white duration-100"
                                                onClick={() => {
                                                    logOut();
                                                    setDropDown(false); // Close dropdown on logout
                                                }}
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/auth/login" className='btn btn-sm md:btn md:bg-red-800 md:text-white bg-red-800 text-sm md:text-base sm:text-base outline-none border-none md:border-none text-white'>Login</Link>
                        )}

                        <div className='justify-self-end'>
                            <Humburger />
                        </div>
                    </div>
                </div>
            </div>
            {/* offCanvas */}
            {isOpen && <OffCanvas />}
            {/* using Modal For Search */}
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <input
                    type="text"
                    placeholder="Type to search..."
                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded md:rounded-xl text-lg focus:outline-none focus:ring-1 focus:ring-gray-300 shadow-sm text-white placeholder-white bg-stone-800" // Added dark background to search input
                />
            </Modal>
        </div>
    );
};

export default Header;