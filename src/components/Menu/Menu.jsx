import '../Menu/menu.css';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const Menu = () => {
    const menuItems = [
        {
            title: "Home",
            submenu: ["Main Home", "Movies", "OTT Home", "TV Shows"]
        },
        {
            title: "Features",
            submenu: ["Download Movies", "Restricted Content", "Related Merchandise", "Genres", "Tags", "Casts"]
        },
        {
            title: "Pages",
            submenu: ["About Us", "Contact Us", "FAQ", "Pricing Plan", "Privacy Policy", "Terms & Use"]
        },
        {
            title: "Blog",
            submenu: [] // No submenu
        },
        {
            title: "Shop",
            submenu: ["Cart", "Checkout", "Wishlist", "My Account"]
        },
    ];

    return (
        <ul className="main-menu md:flex justify-center gap-5">
            {menuItems.map((item, index) => (
                <li key={index} className="menu-item relative group">
                    <Link className="text-white text-base font-medium flex gap-1 items-center hover:text-red-600">{item.title} {item.submenu.length> 0 && <IoIosArrowDown className='text-xs mt-1'/>}</Link>
                    
                    {item.submenu.length > 0 && (
                        <ul className="submenu absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                            {item.submenu.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                    <Link className="block px-3 py-1 text-white hover:text-gray-300">{subItem}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Menu;
