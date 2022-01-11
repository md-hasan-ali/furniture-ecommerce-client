import { useState, useEffect } from "react";
import firebaseInItializetion from "../pages/Firebase/initializeFirebase";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
firebaseInItializetion();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loadding, setisLoadding] = useState('');
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // create new register 
    const registerUser = (email, password) => {
        setisLoadding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                setError(error.message);
            });
        setisLoadding(false);
    }
    // login user
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    // sign in with google 
    const googleSign = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
            }).catch((error) => {
                setError(error.message);
            });
    }
    // observer user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [])

    // logout system
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        user, registerUser, logout, error, loginUser, googleSign, loadding
    }
}

export default useFirebase;