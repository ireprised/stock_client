import initAuth from "../Firebase/init";
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useState,useEffect } from "react";

initAuth()
const useFirebase = () => {
    const [data,setData] = useState({})
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [adminLoading, setAdminLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [messages,setMessages] = useState([])
    // providers 
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)
        .finally(() => setIsLoading(false))
    }

      const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false))
      }

      const handleUserRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleUserLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
           
    }
    // useEffect(()=>{
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user)
    //         } else {
    //             setUser({})
    //         }
    //         setIsLoading(false)
    //       });
    //       return () => unsubscribe;
    // },[])


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setAdminLoading(true)
                fetch(`http://localhost:7000/users/${user?.email}`)
                .then(res => res.json())
                .then(data => setAdmin(data.admin))
                .finally(()=> setAdminLoading(false))
            } else {
                setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    },[])


    return {
        setData,data,user,error,isLoading,handleUserRegister,setError,handleGoogle,setUser,logOut,updateProfile,auth,handleUserLogin,admin,adminLoading,messages,setMessages
    }
};

export default useFirebase;