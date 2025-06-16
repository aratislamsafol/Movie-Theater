import { useContext, useState } from 'react';
import logo from '../../assets/logos/logo.png';
import {AuthContext} from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { showToast } from '../../utils/SweetAlert';

const Login = () => {
    const { loginAccount, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    
    const handleForm = (e) => {
        e.preventDefault();
        const formData =new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        
        loginAccount(email, password)
        .then(res => {
            setUser(res.user);
            showToast("You have successfully logged in!");
            const redirectPath = location?.state?.from?.pathname || "/";
            navigate(redirectPath, { replace: true });
        })

        .catch((err) => {
            setError({...error, login:err.code});
        })
    }
    return (
        <div className="relative p-4 w-full max-w-md h-full md:h-auto bg-black/80 rounded-lg shadow">
            <div className="p-5">
                <div className='flex justify-center pb-3'>
                    <img src={logo} className='w-30 md:w-40 sm:w-35' alt="" />
                </div>
                <div className="text-center">
                    <p className="mb-3 text-xl font-semibold leading-5 text-gray-100">
                        Login to your account 
                    </p>
                </div>

                <div className="mt-7 flex flex-col gap-2">

                    <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                            src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub"
                            className="h-[18px] w-[18px] "/>
                        Continue with GitHub
                    </button>

                    <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                            src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                            className="h-[18px] w-[18px] "/>Continue with
                        Google
                    </button>


                    <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                            src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="Google"
                            className="h-[18px] w-[18px] "/>Continue with
                        LinkedIn
                    </button>
                </div>

                <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                    <div className="h-px w-full bg-slate-200"></div>
                    OR
                    <div className="h-px w-full bg-slate-200"></div>
                </div>

                <form className="w-full" onSubmit={handleForm}>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input name="email" id="email" type="email"  autoComplete="email" required=""
                        className="block w-full rounded-lg border border-gray-600 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-700 "
                        placeholder="Email Address"/>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input name="password" id="password" type="password" autoComplete="current-password" required=""
                        className="mt-2 block w-full rounded-lg border border-gray-600 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Password" />
                    {
                        error.login && <label className="text-sm text-red-600">{error.login}</label>
                    }
                    
                    <p className="mb-3 mt-2 text-sm text-gray-500">
                        <a href="/forgot-password" className="text-red-700 hover:text-red-600">Reset your password?</a>
                    </p>

                    <button type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-red-700 p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400 cursor-pointer">
                        Continue
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-600">
                    Don't have an account?
                    <Link to="/auth/registraion" className="font-medium text-red-700"> Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;