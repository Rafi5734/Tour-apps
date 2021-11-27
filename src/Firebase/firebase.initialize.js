import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";

export const initializeAuthentication = () => {
    return initializeApp(firebaseConfig);
};
// export default initializeAuthentication;
