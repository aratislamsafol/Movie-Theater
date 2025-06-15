import { FaHeadset, FaPhone, FaBullhorn, FaNewspaper } from 'react-icons/fa';
import ContactSection from '../components/ContactSection/ContactSection';
const Contact = () => {
    return (
        <div className='px-3 md:px-4 lg:px-5'>
            <h1 className='py-5 md:py-10 lg:py-12 xl:py-15 text-2xl md:text-3xl lg:text-5xl font-semibold'>Get in touch anytime</h1>
            <div className="bg-black pb-10 pt-4 "> 
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1: Help & Support */}
                    <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col items-start shadow-lg">
                    <div className="bg-gray-800 p-3 rounded-full mb-4">
                        <FaHeadset className="text-white text-3xl" />
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-6">Help & support</h3>
                    <p className="text-start text-gray-400 text-sm mb-4">Need quick, reliable support? Our team is always ready to help you.
                    </p>
                    <a href="mailto:support@streamit.com" className="text-red-500 hover:text-red-400 text-sm font-medium">
                        support@example.com
                    </a>
                    </div>

                    {/* Card 2: Call Us */}
                    <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col items-start shadow-lg text-start">
                    <div className="bg-gray-800 p-3 rounded-full mb-4">
                        <FaPhone className="text-white text-3xl" />
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-6">Call Us</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        Speak directly to one of our team members for assistance.
                    </p>
                    <a href="tel:+14558479657" className="text-red-500 hover:text-red-400 text-sm font-medium">
                        Call On: (+880) 019435348743
                    </a>
                    </div>

                    {/* Card 3: Advertising */}
                    <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col items-start shadow-lg text-start">
                    <div className="bg-gray-800 p-3 rounded-full mb-4">
                        <FaBullhorn className="text-white text-3xl" />
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-6">Advertising</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        Looking to advertise with us? contact our advertising team
                    </p>
                    <a href="mailto:adds@streamit.com" className="text-red-500 hover:text-red-400 text-sm font-medium">
                        support@example.com
                    </a>
                    </div>

                    {/* Card 4: Press Inquiries */}
                    <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col items-start shadow-lg text-start">
                    <div className="bg-gray-800 p-3 rounded-full mb-4">
                        <FaNewspaper className="text-white text-3xl" />
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-6">Press Inquiries</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        For media inquiries or products our press team is here to help.
                    </p>
                    <a href="mailto:inquiries@streamit.com" className="text-red-500 hover:text-red-400 text-sm font-medium">
                        inquiries@expamle.com
                    </a>
                    </div>
                </div>
            </div> 
            <ContactSection />
        </div>
    );
};

export default Contact;

