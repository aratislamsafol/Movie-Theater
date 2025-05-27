import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png';
import { TbShoppingCart } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Spin as Hamburger } from 'hamburger-react';
import { useMediaQuery } from 'react-responsive';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import './header.css';
import Logo from '../Logo/Logo';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [backdropOpen, setBackdropOpen] = useState(false);

    const [dropdown, setDropDown] = useState({
        home: false,
        features: false,
        pages: false,
        blog: false,
        shop: false
    });

    const dropDownController = (key) => {
        setDropDown(prev=> (
            {
                ...prev, 
                [key]: !prev[key]
            }
        ))
    }
    const menuRef = useRef();
    const backdropRef = useRef();

    const isSmallScreen = useMediaQuery({ maxWidth: 640 });
    const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

    let hamburgerSize = 20;
    if (isSmallScreen) hamburgerSize = 18;
    if (isMediumScreen) hamburgerSize = 22;

    useEffect(() => {
        const tl = gsap.timeline();

        if (open) {
            setBackdropOpen(true);
            tl.fromTo(
                backdropRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: 'power2.out' }
            ).fromTo(
                menuRef.current,
                { x: '-100%', opacity: 0 },
                { x: '0%', opacity: 1, duration: 0.6, ease: 'power3.out' },
                "+=0.02"
            );
        } else {
            tl.to(menuRef.current, {
                x: '-100%',
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in'
            }).to(backdropRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => setBackdropOpen(false)
            });
        }
    }, [open]);

    return (
        <section className='relative z-10'>
            <div className='grid grid-cols-5 md:grid-cols-3 justify-between items-center'>

                {/* Logo */}
                <div className='col-span-3 md:col-span-1 flex items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4'>
                    <Logo />
                </div>

                {/* Inline menu for md+ screen */}
                <div className="hidden md:flex col-span-1 justify-center">
                    <ul className="flex gap-6 text-white font-semibold relative">

                        {/* HOME */}
                        <li className="relative group" onClick={()=>dropDownController('home')}>
                            <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                                <Link to="/">Home</Link>
                                <IoIosArrowDown className='text-lg' />
                            </div>

                            <ul className="absolute top-full left-0 bg-black text-white text-sm p-4 mt-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 space-y-2 min-w-[140px]">
                                <li><Link to="">Main Home</Link></li>
                                <li><Link to="">Movies</Link></li>
                                <li><Link to="">OTT Home</Link></li>
                                <li><Link to="">TV Shows</Link></li>
                                <li><Link to="">Videos</Link></li>
                            </ul>
                        </li>

                        {/* FEATURES */}
                        <li className="relative group" onClick={()=>dropDownController('features')}>
                            <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                                <Link to="">Features</Link>
                                <IoIosArrowDown className='text-lg' />
                            </div>
                            <ul className="absolute top-full left-0 bg-black text-white text-sm p-4 mt-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 space-y-2 min-w-[140px]">
                                <li><Link to="">Feature One</Link></li>
                                <li><Link to="">Feature Two</Link></li>
                                <li><Link to="">Feature Three</Link></li>
                                <li><Link to="">Feature Four</Link></li>
                                <li><Link to="">Feature Five</Link></li>
                            </ul>
                        </li>

                        {/* PAGES */}
                        <li className="relative group" onClick={()=>dropDownController('pages')}>
                            <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                                <Link to="">Pages</Link>
                                <IoIosArrowDown className='text-lg' />
                            </div>
                            <ul className="absolute top-full left-0 bg-black text-white text-sm p-4 mt-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 space-y-2 min-w-[140px]">
                                <li><Link to="">Page One</Link></li>
                                <li><Link to="">Page Two</Link></li>
                                <li><Link to="">Page Three</Link></li>
                                <li><Link to="">Page Four</Link></li>
                                <li><Link to="">Page Five</Link></li>
                            </ul>
                        </li>

                        {/* BLOG */}
                        <li className="relative group" onClick={()=>dropDownController('blog')}>
                            <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                                <Link to="">Blog</Link>
                                <IoIosArrowDown className='text-lg' />
                            </div>
                            <ul className="absolute top-full left-0 bg-black text-white text-sm p-4 mt-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 space-y-2 min-w-[140px]">
                                <li><Link to="">Blog Post 1</Link></li>
                                <li><Link to="">Blog Post 2</Link></li>
                                <li><Link to="">Blog Post 3</Link></li>
                                <li><Link to="">Blog Post 4</Link></li>
                                <li><Link to="">Blog Post 5</Link></li>
                            </ul>
                        </li>

                        {/* SHOP */}
                        <li className="relative group" onClick={()=>dropDownController('shop')}>
                            <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                                <Link to="">Shop</Link>
                                <IoIosArrowDown className='text-lg' />
                            </div>
                            <ul className="absolute top-full left-0 bg-black text-white text-sm p-4 mt-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 space-y-2 min-w-[140px]">
                                <li><Link to="">Shop Item 1</Link></li>
                                <li><Link to="">Shop Item 2</Link></li>
                                <li><Link to="">Shop Item 3</Link></li>
                                <li><Link to="">Shop Item 4</Link></li>
                                <li><Link to="">Shop Item 5</Link></li>
                            </ul>
                        </li>

                    </ul>
                </div>

                {/* Right section */}
                <div className='col-span-2 md:col-span-1 place-self-end'>
                    <div className="flex items-center gap-1 md:gap-2">
                        <div className='hidden sm:block'>
                            <CiSearch className='text-white text-xl' />
                        </div>
                        <TbShoppingCart className='text-white text-lg' />
                        <div>
                            <button className='btn bg-red-800 text-white text-xs sm:text-sm md:text-base p-2 h-fit border-none outline-none'>Login</button>
                        </div>

                        {/* Hamburger only for sm screens */}
                        <div className='md:hidden bg-gray-600/12 rounded-md' onClick={() => setOpen(!open)}>
                            <Hamburger color="white" size={hamburgerSize} toggled={open} toggle={setOpen} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop Overlay */}
            {backdropOpen && (
                <div
                    ref={backdropRef}
                    className="fixed inset-0 z-40"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        opacity: 0.4,
                        pointerEvents: 'auto'
                    }}
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Mobile Slide Menu */}
            <div
                ref={menuRef}
                className="fixed top-0 left-0 h-full w-8/12 bg-black p-6 z-50 flex flex-col md:hidden"
                style={{ transform: 'translateX(-100%)', opacity: 0 }}
            >
                <img src={logo} className='py-4 mb-4 w-35 sm:w-45' alt="" />
                <nav className="w-full">
                    <ul className="flex flex-col gap-4 text-white font-semibold cursor-pointer">

                        {/* HOME with dropdown */}
                        <li
                            className='w-full flex flex-col gap-2 hover:text-red-500'
                            onClick={() => dropDownController('home')}
                        >
                            <div className="flex justify-between items-center">
                                <Link to="/">Home</Link>
                                <IoIosArrowDown className='text-lg' />
                            </div>
                            <ul className={`${dropdown.home ? 'block' : 'hidden'} mt-2 text-sm flex flex-col gap-2 bg-gray-700/50 rounded-md p-4`}>
                                <li><Link to="">Main Home</Link></li>
                                <li><Link to="">Movies</Link></li>
                                <li><Link to="">OTT Home</Link></li>
                                <li><Link to="">TV Shows</Link></li>
                                <li><Link to="">Videos</Link></li>
                            </ul>
                        </li>

                        {/* FEATURES */}
                        <li
                            className='w-full flex flex-col gap-2 hover:text-red-500'
                            onClick={() => dropDownController('features')}
                        >
                            <div className="flex justify-between items-center">
                                <Link to="">Features</Link>
                                <IoIosArrowDown className='text-lg' />
                            </div>
                            <ul className={`${dropdown.features ? 'block' : 'hidden'} mt-2 text-sm flex flex-col gap-2 bg-gray-700/50 rounded-md p-4`}>
                                <li><Link to="">Feature One</Link></li>
                                <li><Link to="">Feature Two</Link></li>
                                <li><Link to="">Feature Three</Link></li>
                                <li><Link to="">Feature Four</Link></li>
                                <li><Link to="">Feature Five</Link></li>
                            </ul>
                        </li>

                        {/* PAGES */}
                        <li
                            className='w-full flex flex-col gap-2 hover:text-red-500'
                            onClick={() => dropDownController('pages')}
                        >
                            <div className="flex justify-between items-center">
                                <Link to="">Pages</Link>
                                <IoIosArrowDown className='text-lg' />
                            </div>
                            <ul className={`${dropdown.pages ? 'block' : 'hidden'} mt-2 text-sm flex flex-col gap-2 bg-gray-700/50 rounded-md p-4`}>
                                <li><Link to="">Page One</Link></li>
                                <li><Link to="">Page Two</Link></li>
                                <li><Link to="">Page Three</Link></li>
                                <li><Link to="">Page Four</Link></li>
                                <li><Link to="">Page Five</Link></li>
                            </ul>
                        </li>

                        {/* BLOG */}
                        <li
                            className='w-full flex flex-col gap-2 hover:text-red-500'
                            onClick={() => dropDownController('blog')}
                        >
                            <div className="flex justify-between items-center">
                                <Link to="">Blog</Link>
                                <IoIosArrowDown className='text-lg' />
                            </div>
                            <ul className={`${dropdown.blog ? 'block' : 'hidden'} mt-2 text-sm flex flex-col gap-2 bg-gray-700/50 rounded-md p-4`}>
                                <li><Link to="">Blog Post 1</Link></li>
                                <li><Link to="">Blog Post 2</Link></li>
                                <li><Link to="">Blog Post 3</Link></li>
                                <li><Link to="">Blog Post 4</Link></li>
                                <li><Link to="">Blog Post 5</Link></li>
                            </ul>
                        </li>

                        {/* SHOP */}
                        <li
                            className='w-full flex flex-col gap-2 hover:text-red-500'
                            onClick={() => dropDownController('shop')}
                        >
                            <div className="flex justify-between items-center">
                                <Link to="">Shop</Link>
                                <IoIosArrowDown className='text-lg' />
                            </div>
                            <ul className={`${dropdown.shop ? 'block' : 'hidden'} mt-2 text-sm flex flex-col gap-2 bg-gray-700/50 rounded-md p-4`}>
                                <li><Link to="">Shop Item 1</Link></li>
                                <li><Link to="">Shop Item 2</Link></li>
                                <li><Link to="">Shop Item 3</Link></li>
                                <li><Link to="">Shop Item 4</Link></li>
                                <li><Link to="">Shop Item 5</Link></li>
                            </ul>
                        </li>

                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Header;
