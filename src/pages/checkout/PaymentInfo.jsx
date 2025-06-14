
import DatePickers from '../../components/DatePicker/DatePicker';

const PaymentInfo = ({heading}) => {
    
    return (
        <div className='p-10 px-6 bg-stone-900 rounded-xl'>
            <h2 className='text-gray-50 font-semibold text-2xl pb-4'>{heading}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2  rounded-xl'>
                <div className={`flex flex-col`}>
                    <label htmlFor="cardNumber">
                        Card Number <span className="text-red-700">*</span>
                    </label>
                    <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                        name="cardNumber" 
                        id="cardNumber"
                        required
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2 mt-2 md:mt-0">
                    <div className={`flex flex-col`}>
                        <label htmlFor="expireDate" className='md:px-3'>
                            Expired Date <span className="text-red-700">*</span>
                        </label>
                        <DatePickers />
                    </div>

                    <div className={`flex flex-col`}>
                        <label htmlFor="securityCode">
                            Security Code <span className="text-red-700">*</span>
                        </label>
                        <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                            name="securityCode" 
                            id="securityCode"
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentInfo;