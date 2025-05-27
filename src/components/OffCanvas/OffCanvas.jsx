import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { BiSolidDownArrow } from "react-icons/bi";
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png'; 

const OffCanvas = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const submenuRefs = useRef([]);
  const offcanvasRef = useRef(null);

  const toggleSubmenu = (index) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  useEffect(() => {
    gsap.fromTo(
      offcanvasRef.current,
      { x: "-100%" },
      { x: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    submenuRefs.current.forEach((submenu, idx) => {
      if (!submenu) return;
      if (openIndex === idx) {
        gsap.to(submenu, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out", display: "block" });
      } else {
        gsap.to(submenu, { height: 0, opacity: 0, duration: 0.4, ease: "power2.in", display: "none" });
      }
    });
  }, [openIndex]);

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
      submenu: []
    },
    {
      title: "Shop",
      submenu: ["Cart", "Checkout", "Wishlist", "My Account"]
    },
  ];

  return (
    <div
      ref={offcanvasRef}
      className='bg-gray-900 w-8/12 h-full absolute top-0 left-0 p-3 offcanvas'
      style={{ overflowY: 'auto' }}
    >
      {/* logo Image */}
      <div>
        <img src={logo} alt="logo" className='w-45 sm:w-50'/>
      </div>

      {/* Menu Items */}
      <ul className='mt-8 [&_li>a]:text-[16px]'>
        {menuItems.map((item, index) => (
          <li key={index} className="mb-4">
            <div
              className='flex justify-between items-center w-full py-2 cursor-pointer select-none'
              onClick={() => toggleSubmenu(index)}
            >
              {item.title} <BiSolidDownArrow className='text-xs' />
            </div>

            {item.submenu.length > 0 && (
              <ul
                ref={el => submenuRefs.current[index] = el}
                style={{ height: 0, overflow: 'hidden', opacity: 0, display: 'none' }}
                className='border border-gray-800/90 px-3 p-2 rounded-lg w-10/12'
              >
                {item.submenu.map((subitem, i) => (
                  <li key={i}>
                    <Link className='py-1 block w-full hover:text-red-500'>{subitem}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OffCanvas;
