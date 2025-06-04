import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/logos/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 p-3 md:p-4 lg:p-5">
      <div className="grid md:grid-cols-5 gap-8 pb-10 border-b border-gray-700">
        
        {/* Brand & Contact */}
        <div>
            <div className="pb-2">
                <img src={logo} className='w-24 sm:w-35' alt="" />
            </div>
            <p className="text-sm mb-2">Email us: <a href="#" className="text-gray-300 hover:text-white">mailto:example.info.bd</a></p>
            <p className="text-sm">Helpline number</p>
            <p className="text-xl font-bold mt-2">+(880) 0183432567</p>
        </div>

        {/* Movies to Watch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Movies to Watch</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>The Hunter</li>
            <li>Krishna</li>
            <li>Spiderman</li>
            <li>Fast Furious</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Contact Us</li>
            <li>Pricing Plan</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* About Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Shop</li>
            <li>Terms and Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe Newsletter</h3>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-l bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
            <button className="bg-red-600 px-4 py-2 rounded-r text-white font-semibold hover:bg-red-700">SUBSCRIBE</button>
          </div>
          <p className="mb-2 text-sm">Follow Us:</p>
          <div className="flex gap-3 text-lg">
            <FaFacebookF className="hover:text-red-600 cursor-pointer" />
            <FaTwitter className="hover:text-red-600 cursor-pointer" />
            <FaInstagram className="hover:text-red-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
<div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm text-gray-400">
  <p className="text-center md:text-left flex-1">
    © 2025 <span className="text-red-600">STREAMIT</span>. All Rights Reserved.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ad minus nam libero reiciendis! Veniam ratione distinctio officiis perferendis voluptatem!
  </p>

  {/* App Download + Scroll Up */}
    <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="flex gap-3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" />
        </div>
       
    </div>
</div>

    </footer>
  );
};

export default Footer;
