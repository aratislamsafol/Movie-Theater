import Header from '../components/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Root = () => {
    const location = useLocation();
    return (
        <div className='w-full max-w-[1440px] bg-black'>
            <Header location={location}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;