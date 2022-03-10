import { useState, useEffect } from "react";


//firebase imports
import { auth, db } from "../firebase/config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile
} from "firebase/auth";

import { collection, addDoc } from "firebase/firestore";
import {useAuthContext} from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext()


    const signup = async (email, password, name) => {
        setError(null);
        setIsPending(true);
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            if (!res) {
                throw new Error("Could not complete signup");
            }

            const user = await getAuth();
            await updateProfile(user.currentUser, {
                displayName: name,
            });

            const userRef = await collection(db, "users");
            console.log(userRef)
            await addDoc(userRef, {
                displayName: name,
                uid: res.user.uid,
            });

            await dispatch({type:'LOGIN',payload: res.user})

            setIsPending(false);
            setError(null);
        } catch (err) {
            if (err) {
                setError(err.message);
                setIsPending(false);
            }
        }
    };


    return { signup, error, isPending };
};