import { useState, useEffect } from "react";
import firebaseInItializetion from "../pages/Firebase/initializeFirebase";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
firebaseInItializetion();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loadding, setisLoadding] = useState(true);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // create new register 
    const registerUser = (email, password) => {
        setisLoadding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setisLoadding(false));

    }
    // login user
    const loginUser = (email, password) => {
        setisLoadding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setisLoadding(false));
    }
    // sign in with google 
    const googleSign = () => {
        setisLoadding(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                setError('')
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setisLoadding(false));
    }
    // observer user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setisLoadding(false);
        });
        return () => unsubscribe;
    }, [auth])

    // logout system
    const logout = () => {
        setisLoadding(true);
        signOut(auth).then(() => {
            setError('')
        }).catch((error) => {
            setError(error.message);
        })
            .finally(() => setisLoadding(false));
    }

    return {
        user, registerUser, logout, error, loginUser, googleSign, loadding
    }
}

export default useFirebase;