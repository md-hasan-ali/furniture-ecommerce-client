import { useState, useEffect } from "react";
import firebaseInItializetion from "../pages/Firebase/initializeFirebase";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
firebaseInItializetion();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loadding, setisLoadding] = useState(true);
    const [admin, setIsAdmin] = useState('');
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // create new register 
    const registerUser = (email, password, name, photo, navigate) => {
        setisLoadding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name, photoURL: photo }
                setUser(newUser);
                savedUser(newUser?.displayName, newUser?.email, 'POST');
                // send to the firebase 
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,
                }).then((user) => {

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
                savedUser(result.user?.displayName, result.user?.email, 'PUT');
            }).catch((error) => {
                alert(error.message);
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
    // check admin 
    useEffect(() => {
        fetch(`https://still-thicket-39969.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data?.admin)
            })
    }, [user?.email]);
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
    // save to database website user
    const savedUser = (displayName, email, method) => {
        const user = { displayName, email };
        fetch('https://still-thicket-39969.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.upsertedId) {
                    alert('user has created successfully..!')
                } else {
                    alert('user already created...!')
                }
            });
    }
    return {
        user, registerUser, logout, error, loginUser, googleSign, loadding, admin
    }
}
export default useFirebase;