import { useContext } from 'react';
import '../Humburger/humburger.css';
import { OffCanvasContext } from '../../provider/OfCanvasProvider';
const Humburger = () => {
    const {isOpen, setIsOpen} = useContext(OffCanvasContext);
    return (
        <div className={`humburger flex flex-col gap-[6px] md:hidden ${isOpen? 'open': ''}`} onClick={()=>setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Humburger;