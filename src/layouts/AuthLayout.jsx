import { Outlet } from "react-router-dom";
import bgImage from '../assets/images/bgImg/authbg.webp';

const AuthLayout = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex text-white">
            <Outlet />
        </div>
    );
};

export default AuthLayout;