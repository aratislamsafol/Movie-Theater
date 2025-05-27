import '../Menu/menu.css';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
         <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <ul className='md:flex justify-center gap-2 md:gap-5'>
                <li>
                    <Link to="">Home</Link>
                </li>
                <li>
                    <Link to="">Features</Link>
                </li>
                <li>
                    <Link to="">Blogs</Link>
                </li>
                <li>
                    <Link to="">Pages</Link>
                </li>
                <li>
                    <Link to="">Shop</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;