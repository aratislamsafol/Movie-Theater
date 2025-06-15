import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { BiSolidDownArrow } from "react-icons/bi";
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png'; 

const OffCanvas = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const submenuRefs = useRef([]);
  const offcanvasRef = useRef(null);
  const sliderOverlayRef = useRef(null);

  const toggleSubmenu = (index) => {
    if (openIndex === index) setOpenIndex(null);
    else setOpenIndex(index);
  };

  useEffect(() => {
  const t1 = gsap.timeline();

  t1.to(sliderOverlayRef.current, {
    x: 0,
    duration: 0.8,
    ease: "power2.out"
  })

  .fromTo(
    offcanvasRef.current,
    { x: "-100%" },
    { x: 0, duration: 1, ease: "power2.out" },
    "-=0.5" 
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
      submenu: [{name: "Cart", link: "/cart"}, {name: "Checkout", link: "/cart"}, {name: "Wishlist", link: "/wishlist"}, {name: "My Account", link: "/account"}]
    },
  ];

  return (
    <>
      <div ref={sliderOverlayRef} className="fixed top-0 left-0 h-full w-8/12 bg-black/30 z-40" style={{ transform: "translateX(-100%)" }}>
      </div>
      <div ref={offcanvasRef} className='bg-stone-900 w-8/12 h-full absolute top-0 left-0 p-3 offcanvas z-51' style={{ overflowY: 'auto' }}>
        {/* logo Image */}
        <div>
          <img src={logo} alt="logo" className='w-45 sm:w-50'/>
        </div>

        {/* Menu Items */}
        <ul className='mt-8 [&_li>a]:text-[16px] text-white'>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-4 ">
              <div
                className='flex justify-between items-center w-full py-2 cursor-pointer select-none'
                onClick={() => toggleSubmenu(index)}
              >
                {item.title} <BiSolidDownArrow className='text-xs' />
              </div>

              {item.submenu.length > 0 && (
                <ul ref={el => submenuRefs.current[index] = el}
                  style={{ height: 0, overflow: 'hidden', opacity: 0, display: 'none' }}
                  className='border border-gray-800/90 px-3 p-2 rounded-lg w-10/12'
                >
                  {item.submenu.map((subitem, i) => (
                    
                    <li key={i}>
                      <Link to={`${subitem.link}`} className='py-1 block w-full hover:text-red-500'>{subitem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
    
  );
};

export default OffCanvas;
