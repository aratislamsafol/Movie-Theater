import { FaPlay } from "react-icons/fa";
import { GrCloudComputer } from "react-icons/gr";
import { FaTruckLoading } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import img from '../../assets/about/content-Image-min.png'
const AboutCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center py-6 md:py-8 lg:py-10 my-6">
            {/* text content */}
            <div className="order-1 md:order-2">
                <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-start">Why Choose Streamit </h1>

                <p className="mt-3 border-b border-gray-800 pb-6 md:pb-8 md:text-start">Experience next-level entertainment with Streamit, the trusted streaming platform that delivers seamless content, unparalleled convenience, and high-quality entertainment. Whether you're watching Streamit ensures a premium experience every time.</p>

                <div className="mt-10 md:mt-4 flex gap-4 flex-col md:flex-row justify-center md:justify-start items-center md:text-start">
                    <div>
                        <FaPlay className="text-2xl"/>
                    </div>
                    <div>
                        <h5 className="text-lg py-2"><span className="font-medium text-red-600">10,000+</span> Movies and Shows Across All Genres</h5>
                        <span className="text-xs">Enjoy personalized suggestions tailored to your viewing preferences.</span>
                    </div>
                </div>

                <div className="mt-6 flex gap-4 flex-col md:flex-row justify-center md:justify-start items-center md:text-start">
                    <div>
                        <GrCloudComputer className="text-2xl"/>
                    </div>
                    <div>
                        <h5 className="">AI-Powered Recommendations</h5>
                        <span className="text-xs">Dive into a diverse library of top-rated content, from blockbuster hits to exclusive originals.</span>
                    </div>
                </div>

                <div className="mt-6 flex gap-4 flex-col md:flex-row justify-center md:justify-start items-center md:text-start">
                    <div>
                        <FaTruckLoading className="text-2xl"/>
                    </div>
                    <div>
                        <h5 className=""><span className="
                        font-medium text-red-600">99.9% </span>Uptime and Buffer-Free Streaming</h5>
                        <span className="text-xs">Dive into a diverse library of top-rated content, from blockbuster hits to exclusive originals.</span>
                    </div>
                </div>

                <div className="mt-6 flex gap-4 flex-col md:flex-row justify-center md:justify-start items-center text-start">
                    <div>
                        <RiSecurePaymentFill className="text-2xl"/>
                    </div>
                    <div>
                        <h5 className="">Secure Payment & Hassle-Free Subscriptions</h5>
                        <span className="text-xs">Get started in seconds with 100% secure transactions.</span>
                    </div>
                </div>
            </div>

            {/* images */}
            <div className="order-2 md:order-1">
                <img src={img} alt="content image" />
            </div>
        </div>
    );
};

export default AboutCard;