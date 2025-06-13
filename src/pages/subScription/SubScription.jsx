import { Link, useLoaderData } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const SubScription = () => {
    const { movies: pricingAll } = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center text-gray-300  gap-10 p-3 md:p-4 lg:p-5 py-20 md:py-35 lg:py-40'>
            {pricingAll.map(pricing => 
                 <div className=''>
                    {pricing?.offer &&  <h4 className='text-lg text-white text-center bg-red-600 font-medium rounded-t-2xl p-1'>Save {pricing.offer}</h4>}
                    {/* Package Info */}
                    <div className={`${!pricing.offer ? "rounded-t-2xl": ""} p-8 py-20  bg-black border border-gray-800`}>
                         
                        <h4 className='text-2xl py-2'>{pricing.name}</h4>
                        <h2 className='text-white text-4xl'>{pricing.price}  <span className='text-2xl text-gray-300'> / {pricing.duration}</span></h2>
                    </div>
                    {/* Package Details */}
                    <div className="p-8 bg-zinc-900 text-white space-y-4 pt-18 pb-12 rounded-b-2xl">
                        <h4 className='text-lg font-normal flex items-center gap-3'>{pricing.ads? <FaCheck className='text-white'/>: <ImCross className='text-red-700 text-sm'/>} Ads with movies and shows</h4>
                        
                        <h4 className='text-lg font-normal flex items-center gap-3'>{(pricing.devices.watchOnTV && pricing.devices.watchOnLaptop && pricing.devices.watchOnMobile && pricing.devices.watchOnTablet)? <FaCheck className='text-white'/>: <ImCross className='text-red-700 text-sm'/>} Watch on TV or Laptop or Mobile</h4>

                         <h4 className='text-lg font-normal flex items-center gap-3'>{pricing.simultaneousStreams? <FaCheck className='text-white'/>: <ImCross className='text-red-700 text-sm'/>} Maximum Devices Connected {pricing.simultaneousStreams}</h4>

                         <h4 className='text-lg font-normal flex items-center gap-3'>{pricing.download? <FaCheck className='text-white'/>: <ImCross className='text-red-700 text-sm'/>} Video Downloadable {pricing.download}</h4>

                        <h4 className='text-lg font-normal flex items-center gap-3'>{pricing?.quality? <FaCheck className='text-white'/>: <ImCross className='text-red-700 text-sm'/>} Video Downloadable {pricing.quality} ({pricing.resolution})</h4>
                        <div className='mt-10'></div>
                        <Link to="/pricing/checkout"  state={{ memberShip: pricing }} className='bg-red-700 px-5 py-3 rounded-md text-sm flex justify-center'>Checkout</Link>
                    </div>
                </div>
            )}
           
        </div>
    );
};

export default SubScription;