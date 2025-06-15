import '../Menu/menu.css';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const Menu = () => {
    const menuItems = [
        {
        title: "Home",
        submenu: [{name: "Main Home", link: "/"}, {name: "Movies", link: "/movies"}, {name: "OTT Home", link: "/"}, {name: "TV Shows", link: "/tv-shows"}]
        },
        {
        title: "Features",
        submenu: [{name: "Download Movies", link: "/download"}, {name: "Restricted Content", link: "/restircted-content"}, {name: "Related Merchandise", link: "/merchandise"}, {name: "Genres", link: "/genres"}, {name: "Casts", link: "/casts"}]
        },
        {
        title: "Pages",
        submenu: [{name: "About Us", link: "/about"}, {name: "Contact Us", link: "/contact"}, {name: "FAQ", link: "/faq"}, {name: "Privacy Policy", link: "/privacy-policy"}, {name: "Terms & Use", link: "/terms"}]
        },
        {
        title: "Blog",
        submenu: []
        },
        {
        title: "Shop",
        submenu: [{name: "Cart", link: "/cart"}, {name: "Checkout", link: "/checkout"}, {name: "Wishlist", link: "/wishlist"}, {name: "My Account", link: "/account"}]
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
                                    <Link to={subItem.link} className="block px-3 py-1 text-white hover:text-gray-300">{subItem.name}</Link>
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
