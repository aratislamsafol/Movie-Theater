import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [wishList, setWishList] = useState([]);
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const auth = getAuth(app);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // Only set the user if they exist and their email is verified
            if (currentUser && currentUser.emailVerified) {
                setUser(currentUser);
            } else {
                // If no user, or user exists but email is not verified, set user to null
                setUser(null);
            }

            setLoading(false);
        });
        return () => unsubscribe();
    },[auth])

    const createAccount =(email, password) =>{setLoading(true); return createUserWithEmailAndPassword(auth, email, password)}
    const loginAccount = (email, password) => {setLoading(true); return signInWithEmailAndPassword(auth, email, password)};
    const logOut = ()=>{ setLoading(true); return signOut(auth); }
    const updateUserProfile = (updateData) => updateProfile(auth.currentUser, updateData);

    // Dynamic verificationEmail function
    const verificationEmail = ()=> {
        setLoading(true);
        if (auth.currentUser) {
            const currentOrigin = window.location.origin;

            const actionCodeSettings = {
                url: currentOrigin,
                handleCodeInApp: true, 
            };
            return sendEmailVerification(auth.currentUser, actionCodeSettings);
        } else {
            setLoading(false);
            return Promise.reject(new Error("No user found to send verification email."));
        }
    }

    const authData = {
        createAccount, loginAccount, logOut, setUser, user, updateUserProfile, loading, wishList, setWishList, verificationEmail
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;