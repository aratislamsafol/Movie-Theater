import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa'; 

const ContactSection = () => {
  return (
    <div className="bg-black py-10 text-start">
      <div className="mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Section: Contact Form */}
        <div className="bg-[#1a1a1a] rounded-lg p-6 lg:p-8 flex-1 shadow-lg">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold mb-2">Start the conversation</h2>
          <p className="text-gray-400 text-sm mb-6">
            Fill out the contact form, and one of our team members will be in touch shortly
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <label htmlFor="first-name" className="sr-only">First Name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name *"
                className="w-full bg-[#333333] text-white placeholder-gray-400 border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="last-name" className="sr-only">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name *"
                className="w-full bg-[#333333] text-white placeholder-gray-400 border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="your-email" className="sr-only">Your Email</label>
              <input
                type="email"
                id="your-email"
                name="your-email"
                placeholder="Your Email *"
                className="w-full bg-[#333333] text-white placeholder-gray-400 border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="phone-number" className="sr-only">Phone Number</label>
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                placeholder="Phone Number *"
                className="w-full bg-[#333333] text-white placeholder-gray-400 border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="your-message" className="sr-only">Your Message</label>
              <textarea
                id="your-message"
                name="your-message"
                placeholder="Your Message *"
                rows="5"
                className="w-full bg-[#333333] text-white placeholder-gray-400 border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-red-500 resize-y"
                required
              ></textarea>
            </div>

            <div className="md:col-span-2 flex items-center mb-4">
              <input
                type="checkbox"
                id="save-info"
                name="save-info"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded bg-[#333333]"
              />
              <label htmlFor="save-info" className="ml-2 text-sm text-gray-400">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Visit Us, Business Inquiries, Follow Us */}
        <div className="flex-1 lg:max-w-md"> 
          {/* Visit Us */}
          <div className="mb-8">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-3">Visit Us</h3>
            <p className="text-gray-400 text-sm mb-2">If you'd like to visit or write to us:</p>
            <div className="flex items-start text-gray-400 text-sm">
              <div>
                <p>example Headquarters 123</p>
                <p>example Lane, Bangladesh,</p>
                <p>Arat, 123 Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Business Inquiries */}
          <div className="mb-8">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-3">Business Inquiries</h3>
            <p className="text-gray-400 text-sm mb-2">
              For partnership opportunities, licensing, or media-related queries, please reach out to our business team.
            </p>
            <a href="mailto:business@streamit.com" className="text-red-500 hover:text-red-400 text-sm font-medium">
              business@example.com
            </a>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white text-lg transition-colors duration-200">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white text-lg transition-colors duration-200">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white text-lg transition-colors duration-200">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;