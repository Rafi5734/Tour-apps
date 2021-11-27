import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { initializeAuthentication } from "../Firebase/firebase.initialize";

initializeAuthentication();
const googleAuthProvider = new GoogleAuthProvider();

const useFirebase = () => {
    // start Authentication info....
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, []);

    const googleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser({});
            })
            .finally(() => setIsLoading(false))
            .catch((error) => {
                // An error happened.
            });
    };

    // end Authentication info....

    // start data info

    const [products, setProduct] = useState([]);
    const [btn, setBtn] = useState([]);
    const [sortItems, setSortItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch("https://ghastly-castle-73206.herokuapp.com/tours")
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            });
    }, []);

    const handleCart = (p) => {
        // console.log(p);
    };

    const handleAddToCart = (index) => {
        console.log(index);
        const foundData = products[index];
        foundData.user = user?.displayName;
        foundData.status = "pending...";
        // console.log(foundData);
        fetch("https://ghastly-castle-73206.herokuapp.com/myorder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(foundData),
        });
    };

    // end data info
    return {
        cartItems,
        sortItems,
        user,
        signInUsingGoogle,
        googleSignOut,
        btn,
        handleAddToCart,
        handleCart,
        products,
        setIsLoading,
        isLoading,
    };
};
export default useFirebase;
