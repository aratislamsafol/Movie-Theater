import { Link } from "react-router-dom";

const CheckOutForm = ({ heading}) => {
    return (
        <div className="text-start p-10 px-6 bg-stone-900 rounded-xl">
            <h2 className="text-gray-50 font-semibold text-2xl pb-4">{heading}</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="md:col-span-2 flex flex-col">
                    <label htmlFor="userName">
                        Username <span className="text-red-700">*</span>
                    </label>
                    <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                        name="userName" 
                        id="userName"
                        required
                    />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="password">
                        Password <span className="text-red-700">*</span>
                    </label>
                    <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                        name="password" 
                        id="password"
                        required
                    />
                </div>

                 <div className="flex flex-col">
                    <label htmlFor="cPassword">
                        Confirm Password <span className="text-red-700">*</span>
                    </label>
                    <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                        name="cPassword" 
                        id="cPassword"
                        required
                    />
                </div>

                <div className={`flex flex-col`}>
                    <label htmlFor="email">
                        Email Address <span className="text-red-700">*</span>
                    </label>
                    <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="email"
                        name="email" 
                        id="email"
                        required
                    />
                </div>

                <div className={`flex flex-col`}>
                    <label htmlFor="cEmail">
                        Confirm Email <span className="text-red-700">*</span>
                    </label>
                    <input className="mt-1 p-3 bg-black outline-none text-gray-100" type="text"
                        name="cEmail" 
                        id="cEmail"
                        required
                    />
                </div>
            </form>
            <p className="text-gray-200 mt-3">Already have an account? <Link to="/auth/login" className="text-red-700">Log in here</Link></p>
        </div>

    );
};

export default CheckOutForm;