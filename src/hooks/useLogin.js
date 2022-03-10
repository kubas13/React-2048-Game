import {useEffect, useState} from "react";

//context
import { useAuthContext } from "./useAuthContext";

//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const  useLogin = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login =  (email, password) => {
        setError(null);
        setIsPending(true);
      signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                dispatch({ type: "LOGIN", payload: res });

                setError(null);
                setIsPending(false);
            })
            .catch((err) => {
                setError("Wrong email address or password");
                setIsPending(false);
            });

    };

    useEffect(()=>{})
    return { login, isPending, error };
}

