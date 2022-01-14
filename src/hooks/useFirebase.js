import { useState, useEffect } from "react";
import firebaseInItializetion from "../pages/Firebase/initializeFirebase";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
firebaseInItializetion();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loadding, setisLoadding] = useState(true);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // create new register 
    const registerUser = (email, password, name, photo, navigate) => {
        setisLoadding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name, photoURL: photo }
                setUser(newUser);
                // send to the firebase 
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,
                }).then((user) => {
                    console.log(user?.displayName)
                }).catch((error) => {
                });

                navigate('/')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setisLoadding(false));

    }
    // login user
    const loginUser = (email, password, navigate, location) => {
        setisLoadding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.form || '/';
                navigate(destination);
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
                console.log(result.user)
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