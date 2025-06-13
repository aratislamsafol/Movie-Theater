import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import logo from '../../assets/logos/logo.png';

const Registration = () => {
    const { createAccount, updateUserProfile, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const getCustomErrorMessage = (code) => {
    switch (code) {
        case "auth/email-already-in-use":
            return "Email Account is Already Used";
        case "auth/invalid-email":
            return "Please Provied the Valid Email";
        case "auth/weak-password":
            return "Weak password. It must be at least 6 characters long and include uppercase and lowercase letters, a number, and a special character.";
        case "auth/missing-password":
            return "Password Must be Required";
        case "auth/internal-error":
            return "Internal Error, Try Again Later";
        case "auth/network-request-failed":
            return "Netword Request Failed, Check Internet Connection";
        default:
            return "Something Wrong! Try Again Please";
    }
};

    const handleSubmit = (e) => {
        e.preventDefault();
        const form  = new FormData(e.target);
        const password = form.get("password");
        const email = form.get("email");
        const name = form.get("name");
        const url = form.get("url");
        const terms = form.get("terms");
        const confirmPassword = form.get("cPassword");

        // validation Password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{6,}$/;
        
        if (!passwordRegex.test(password)) {
            const message = getCustomErrorMessage("auth/weak-password");
            setError({ CreateAccount: message });
            return;
        }
        // confirm Password Check
        if (password !== confirmPassword) {
        setError({ CreateAccount: "Password and Confirm Password do not match." });
        return;
        }
        // validation Terms
        if (!terms) {
            setError({ CreateAccount: "You must accept the Terms & Conditions." });
            return;
        }
        createAccount(email, password)
        .then(res => {
            setUser(res.user);
            updateUserProfile({displayName: name, photoURL: url})
            .then(() =>{
                navigate("/");
            })
            .catch(err=> {
                 const message = getCustomErrorMessage(err.code);
                 setError({...error, UpdateProfile:message})
            })
        })
         .catch(err => {
            const message = getCustomErrorMessage(err.code);
            setError({ ...error, CreateAccount: message });
        });
    }
    return (
        <div className="relative p-4 w-full max-w-md h-full md:h-auto bg-black/80 rounded-lg shadow">
            <div className="p-5">
                <div className='flex justify-center pb-3'>
                    <img src={logo} className='w-30 md:w-40 sm:w-35' alt="" />
                </div>
                <div className="text-center">
                    <p className="mb-3 text-xl font-semibold leading-5 text-gray-100">
                        Sign Up to your account 
                    </p>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-2">

                    <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                            src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub"
                            className="h-[18px] w-[18px] "/>
                        GitHub
                    </button>

                    <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                            src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                            className="h-[18px] w-[18px] "/>
                        Google
                    </button>


                    <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                            src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="Google"
                            className="h-[18px] w-[18px] "/>
                        LinkedIn
                    </button>
                </div>

                <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                    <div className="h-px w-full bg-slate-200"></div>
                    OR
                    <div className="h-px w-full bg-slate-200"></div>
                </div>

                <form className="w-full" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input name="name" id="name" type="text"  required className="block w-full rounded-lg border border-gray-600 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-700 "
                        placeholder="Name"/>

                    <label htmlFor="url" className="sr-only">Image Url</label>
                    <input name="url" id="url" type="text"  
                        className="mt-2 block w-full rounded-lg border border-gray-600 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-700 "
                        placeholder="Image Url"/>

                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input name="email" id="email" type="email"  autoComplete="email" required
                        className="mt-2 block w-full rounded-lg border border-gray-600 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-700 "
                        placeholder="Email Address"/>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input name="password" id="password" type="password" autoComplete="current-password" required
                        className="mt-2 block w-full rounded-lg border border-gray-600 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Password" />
                    <label htmlFor="password" className="sr-only">Confirm Password</label>
                    <input name="cPassword" id="cPassword" type="password" autoComplete="current-password" required
                        className="mt-2 block w-full rounded-lg border border-gray-600 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Confirm Password" />
                  
                    
                    <div className="flex items-center mt-2 gap-2">
                        <input type="checkbox" name="terms" className=" w-[14px] h-[14px] accent-red-700 rounded-md"  /><span className='text-sm'>Accept Term & Conditions</span>
                    </div> 
                    
                    {
                        (error.CreateAccount || error.UpdateProfile)  && <label className="text-sm text-red-600"> {error.CreateAccount || error.UpdateProfile}</label>
                    }

                    <button type="submit" className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-red-700 p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400 cursor-pointer">
                        Continue
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-600">
                    Don't have an account?
                    <Link to="/auth/login" className="font-medium text-red-700"> Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;