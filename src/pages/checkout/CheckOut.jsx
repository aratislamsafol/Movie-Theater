import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckOutForm from '../../components/CheckoutForm/CheckOutForm';
import BillingAddress from './BillingAddress';
import PaymentInfo from './PaymentInfo';
import { showSuccess } from '../../utils/SweetAlert';

const CheckOut = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [memberShip, setMemberShip] = useState(null);

    useEffect(() => {
        const stateMember = location?.state?.memberShip;
        if (stateMember) {
            setMemberShip(stateMember);
            localStorage.setItem("memberShip", JSON.stringify(stateMember));
        } else {
            const saved = localStorage.getItem("memberShip");
            if (saved) {
                setMemberShip(JSON.parse(saved));
            } else {
                navigate("/pricing"); 
            }
        }
    }, [location, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await showSuccess("Payment is Completed", "Success!");
        localStorage.removeItem("memberShip");
        navigate("/");
    };

    if (!memberShip) return null; 

    return (
        <form className='p-3 md:p-4 lg:p-5 text-start mb-0 md:mb-20 mt-12' onSubmit={handleSubmit}>
            <div role="alert" className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className='text-white'>A Payment Gateway must be set up before any payments will be processed.</span>
            </div>

            <div className='text-start p-10 px-6 mt-5 bg-stone-900 rounded-xl'>
                <h3 className='text-gray-50 font-semibold text-2xl pb-8'>Membership Information</h3>
                <p className='font-thin'>
                    You have selected the {memberShip.name} membership level. <br />
                    Enjoy all the benefits of SuperIT
                </p>
                <p>The price for membership is {memberShip.price} {memberShip.duration}.</p>
            </div>

            <div className='mt-6'>
                <CheckOutForm heading="Account Information" />
            </div>

            <div className='mt-6'>
                <BillingAddress heading="Billing Address" />
            </div>

            <div className='mt-6'>
                <PaymentInfo heading="Payment Information" />
            </div>

            <button type='submit' className='bg-red-700 text-white px-3 py-2 text-sm md:text-base md:px-4 md:py-3 mt-6 rounded'>
                Submit and Checkout
            </button>
        </form>
    );
};

export default CheckOut;
