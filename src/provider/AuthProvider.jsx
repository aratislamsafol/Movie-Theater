import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { showError } from '../utils/SweetAlert';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [wishList, setWishList] = useState([]);
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const auth = getAuth(app);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser && currentUser.emailVerified) {
                setUser(currentUser);
            } else {
                setUser(null);
            }

            setLoading(false);
        });
        return () => unsubscribe();
    },[auth])

    const createAccount =(email, password) =>{setLoading(true); return createUserWithEmailAndPassword(auth, email, password)}
    
    const loginAccount = async(email, password) => {
        setLoading(true); 
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const isLoggeiIn = userCredential.user;

            if(isLoggeiIn.emailVerified) {
                console.log(userCredential)
                return userCredential;
            }else {
                await signOut(auth);
                showError("Email Verified First then Login");
                throw new Error("Please verify your email before logging in.");
            }
        }catch (error) {
            console.log(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    }
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