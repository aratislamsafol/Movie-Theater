import React, { useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Accordion = () => {
  const accordionData = [
    {
      id: 1,
      title: "What is the Capital of France and its Cultural Significance?",
      content: "The capital of France is Paris. It is widely recognized as a major global hub for art, fashion, gastronomy, and culture. Iconic landmarks like the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral attract millions of visitors annually. Paris is also famous for its vibrant café culture and designer boutiques, making it a dream destination for many. Its rich history and influence on Western culture are unparalleled, from the Enlightenment to modern art movements.",
    },
    {
      id: 2,
      title: "How Does the Streamit Subscription Service Operate?",
      content: "Our subscription service provides unlimited, on-demand access to our extensive content library for a convenient monthly fee. We offer a range of flexible plans, including Basic, Standard, and Premium, each tailored to different viewing habits and budgets. Payments are seamlessly processed on an automatic recurring basis each month, ensuring uninterrupted service. You retain full control and have the flexibility to upgrade, downgrade, or cancel your subscription at any time directly from your account settings, without any hidden fees or long-term commitments.",
    },
    {
      id: 3,
      title: "Can I Stream Content on Multiple Devices Simultaneously?",
      content: "Absolutely! Our platform is designed for multi-device viewing flexibility. You can enjoy your favorite movies, TV shows, and episodes on a variety of devices, including smart TVs, laptops, tablets, smartphones, and gaming consoles. The number of simultaneous streams allowed will depend on your specific subscription plan. For instance, our Basic plan typically allows one concurrent stream, while Premium plans may support up to four or more. Please refer to your detailed plan information in your account dashboard for the precise number of concurrent streams available to you.",
    },
    {
      id: 4,
      title: "Is There a Free Trial Period Available for New Users?",
      content: "Yes, we are pleased to offer a generous 7-day free trial period exclusively for all new users. This trial allows you to fully explore and experience our entire content library, including all exclusive titles and features, without any financial commitment. It's the perfect opportunity to discover if Streamit is the right fit for your entertainment needs before you decide to subscribe. Importantly, no credit card information is required to begin your free trial, making it entirely risk-free.",
    },
    {
      id: 5,
      title: "What are the Accepted Payment Methods on Streamit?",
      content: "We strive to make your payment experience as convenient as possible. Currently, we accept a wide range of major credit and debit cards, including Visa, MasterCard, American Express, and Discover. In addition, for added flexibility and security, we also support popular digital payment platforms such as PayPal and Google Pay. All transactions conducted on our platform are processed securely using industry-standard encryption protocols, ensuring the protection of your financial information.",
    },
    {
      id: 6,
      title: "How Often is New Content Added to Streamit?",
      content: "Our content library is continuously growing! We add new movies, TV shows, and exclusive series on a weekly basis. We work hard to bring you the latest blockbusters, critically acclaimed series, and hidden gems across various genres. Keep an eye on our 'New Releases' section for all the fresh content updates and never run out of things to watch.",
    },
    {
      id: 7,
      title: "Can I Download Content for Offline Viewing?",
      content: "Yes, many of our titles are available for download, allowing you to watch them offline. This feature is perfect for when you're traveling or have limited internet access. Simply look for the download icon next to the title you wish to save. Downloaded content will be accessible from your 'Downloads' section within the app for a limited time.",
    },



    {
      id: 8,
      title: "Is There a Free Trial Period Available for New Users?",
      content: "Yes, we are pleased to offer a generous 7-day free trial period exclusively for all new users. This trial allows you to fully explore and experience our entire content library, including all exclusive titles and features, without any financial commitment. It's the perfect opportunity to discover if Streamit is the right fit for your entertainment needs before you decide to subscribe. Importantly, no credit card information is required to begin your free trial, making it entirely risk-free.",
    },
    {
      id: 9,
      title: "What are the Accepted Payment Methods on Streamit?",
      content: "We strive to make your payment experience as convenient as possible. Currently, we accept a wide range of major credit and debit cards, including Visa, MasterCard, American Express, and Discover. In addition, for added flexibility and security, we also support popular digital payment platforms such as PayPal and Google Pay. All transactions conducted on our platform are processed securely using industry-standard encryption protocols, ensuring the protection of your financial information.",
    },
    {
      id: 10,
      title: "How Often is New Content Added to Streamit?",
      content: "Our content library is continuously growing! We add new movies, TV shows, and exclusive series on a weekly basis. We work hard to bring you the latest blockbusters, critically acclaimed series, and hidden gems across various genres. Keep an eye on our 'New Releases' section for all the fresh content updates and never run out of things to watch.",
    },
    {
      id: 11,
      title: "Can I Download Content for Offline Viewing?",
      content: "Yes, many of our titles are available for download, allowing you to watch them offline. This feature is perfect for when you're traveling or have limited internet access. Simply look for the download icon next to the title you wish to save. Downloaded content will be accessible from your 'Downloads' section within the app for a limited time.",
    },
  ];

  const [openItemId, setOpenItemId] = useState(null);
  const contentRefs = useRef({});

  const toggleItem = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="bg-black py-10 w-full text-start px-3 md:px-4 lg:px-5">
      <div className="mx-auto ">
        {accordionData.map((item) => (
          <div key={item.id} className="mb-2 last:mb-0">
            <button
              className="flex justify-between items-center w-full bg-[#1a1a1a] p-4 rounded-md shadow-md focus:outline-none focus:ring-offset-[#1a1a1a]" 
              onClick={() => toggleItem(item.id)}
              aria-expanded={openItemId === item.id} 
              aria-controls={`accordion-content-${item.id}`} 
            >
              <span className="text-white text-sm md:text-base font-medium text-left pr-4">{item.title}</span> 
              {openItemId === item.id ? (
                <FaMinus className="text-white text-sm flex-shrink-0" /> 
              ) : (
                <FaPlus className="text-white text-sm flex-shrink-0" />
              )}
            </button>
            <div
              id={`accordion-content-${item.id}`} // Accessibility ID
              ref={(el) => (contentRefs.current[item.id] = el)} // Assign ref
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: openItemId === item.id ? contentRefs.current[item.id]?.scrollHeight + 'px' : '0px',
                paddingTop: openItemId === item.id ? '4px' : '0', 
                paddingBottom: openItemId === item.id ? '1rem' : '0',
              }}
            >
              <div className="bg-[#1a1a1a] text-gray-300 text-sm leading-relaxed pb-4 rounded-b-md p-4"> 
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;