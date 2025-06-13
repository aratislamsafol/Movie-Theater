import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const SubScriptionLayout = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x).slice(-1);

  return (
    <div className="">
        <Header />
        <div className="bg-black text-white text-center">
            {/* Breadcrumb */}
            <div className="bg-stone-950 p-5 text-sm flex justify-center items-center gap-2">
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return (
                    <span key={routeTo} className="flex items-center gap-2">
                    <span>/</span>
                    {isLast ? (
                        <span className="font-semibold capitalize text-white">{name.replace(/-/g, " ")}</span>
                    ) : (
                        <Link to={routeTo} className="text-gray-400 hover:text-white capitalize">
                        {name.replace(/-/g, " ")}
                        </Link>
                    )}
                    </span>
                );
                })}
            </div>

            {/* Page content */}
            <Outlet />
            <div className="pt-5">
                <Footer/>
            </div>
        </div>
    </div>
    
  );
};

export default SubScriptionLayout;
