import { createContext, useState } from "react";

export const OffCanvasContext = createContext();
const OfCanvasProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <OffCanvasContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </OffCanvasContext.Provider>
    );
};

export default OfCanvasProvider;