import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const WishList = () => {
    const { wishList, setWishList } = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default WishList;