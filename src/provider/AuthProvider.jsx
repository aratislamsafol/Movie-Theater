import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [wishList, setWishList] = useState([]);
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const auth = getAuth(app);

    console.log(wishList)
    useEffect(()=>{   
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    },[auth])

    const createAccount =(email, password) =>{setLoading(true); return createUserWithEmailAndPassword(auth, email, password)}
    const loginAccount = (email, password) => {setLoading(true); return signInWithEmailAndPassword(auth, email, password)};
    const logOut = ()=>{ setLoading(true); return signOut(auth); } 
    const updateUserProfile = (updateData) => updateProfile(auth.currentUser, updateData);

    const authData = {
       createAccount, loginAccount, logOut, setUser, user, updateUserProfile, loading, wishList, setWishList
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;