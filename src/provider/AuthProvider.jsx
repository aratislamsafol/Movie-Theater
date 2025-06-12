import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const auth = getAuth(app);

    useEffect(()=>{   
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    },[auth])

    const createAccount =(email, password) =>createUserWithEmailAndPassword(auth, email, password)
    const loginAccount = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logOut = ()=>{ return signOut(auth); } 
    const updateUserProfile = (updateData) => updateProfile(auth.currentUser, updateData);

    const authData = {
       createAccount, loginAccount, logOut, setUser, user, updateUserProfile
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;