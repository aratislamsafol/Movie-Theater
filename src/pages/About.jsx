import AboutCard from "../components/AboutCard.jsx/AboutCard";
import bgImg from '../assets/about/bg-aboutus-min.png';
import { MdOutlinePlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import map from  '../assets/about/map.webp';
import Partner from "../components/Partner/Partner";
const About = () => {
    const teamMate = [
        {
            id: 1,
            name: "Khan Kamrul Islam",
            role: "CEO",
            img: "https://i.postimg.cc/7JnVjQKx/kamrul.jpg"
        },
        {
            id: 2,
            name: "Majehedul Musa",
            role: "Designer",
            img: "https://i.postimg.cc/KRmQtxY4/musa.jpg"
        },
        {
            id: 3,
            name: "MHA Kabbo",
            role: "Developer",
            img: "https://i.postimg.cc/dLn6Bp76/kabbo.jpg"
        },
        {
            id: 4,
            name: "Monty Rock",
            role: "Designer",
            img: "https://i.postimg.cc/XXfQZp4T/monty.jpg"
        }
    ];

    return (
        <div className="px-3 md:px-4 lg:px-5">
            {/* About Text Section */}
            <div className="py-3 mt-6 text-center border-b border-gray-900 px-4">
                <h1 className="font-medium text-xl md:text-2xl lg:text-3xl py-4 mt-10">
                    About Streamit OTT Platform
                </h1>
                <p>
                    Welcome to Streamit, a next-generation streaming platform proudly developed by Iqonic Design. We specialize in creating cutting-edge digital solutions, and Streamit is our latest breakthrough in the world of online entertainment. Whether you're a movie lover, a TV show binge-watcher, or enjoy live events, our platform is designed to deliver high-quality content directly to your device, ensuring a seamless, uninterrupted experience.
                </p>
                <p className="py-3 pb-8">
                    At Iqonic Design, we aim to revolutionize digital content consumption with Streamit, a fast, reliable, and personalized streaming platform. Built with cutting-edge technology, it offers superior streaming quality, tailored recommendations, and an intuitive content management system.
                </p>
            </div>

            {/* About Card */}
            <AboutCard />

            {/* Streaming Planning Section with bg image */}
            <div
                style={{ backgroundImage: `url(${bgImg})` }}
                className="bg-cover bg-center py-16 md:py-40 text-white text-center"
            >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    Your Streaming, Our Planning
                </h2>
                <p className="mt-4 max-w-2xl text-lg mx-auto mb-6 px-4">
                    Streamit brings you entertainment that fits your lifestyle — fast, smooth, and totally tailored for you.
                </p>
                <Link
                    to="/pricing/pricing-plan"
                    className="bg-red-700 hover:bg-red-800 transition px-6 md:px-8 py-2 md:py-3 rounded-md font-semibold flex gap-1 items-center w-fit mx-auto justify-center"
                >
                    Start Trial <MdOutlinePlayArrow className="text-xl" />
                </Link>
            </div>

            {/* Team Section */}
            <div className="py-16">
                <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">Meet Our Team</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMate.map(member => (
                        <div key={member.id} className="text-center shadow-md rounded-lg hover:shadow-xl transition">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h mx-auto object-cover mb-4"
                            />
                            <p className="text-xl font-semibold">{member.name}</p>
                            <p className="text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* connect with us */}
            <div className="py-6 gap-4 md:gap-12 grid grid-cols-1 md:grid-cols-11 items-center bg-stone-900">
                {/* image map */}
                <div className="md:col-span-5">
                    <img src={map} className="w-full" alt="map images" />
                </div>
                  {/* text */}
                  <div className="md:col-span-6 flex flex-col gap-2 md:items-start md:text-start w-21/22">
                    <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl ">Connect with Us</h1>
                    <p className="py-4 text-sm text-gray-200">We value our community and encourage feedback to help us improve. If you have any questions, suggestions, or require assistance, our support team is ready to help:</p>

                    <p>Company: Iqonic Design</p>
                    <p>Product: Streamit WordPress</p>
                    <p>Contact Us: hello@iqonic.design</p>
                </div>
            </div>

            {/* partner */}
            <Partner />
        </div>
    );
};

export default About;
