import { CloseFullscreen } from "@mui/icons-material";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXyPPOqPoHGIvy-Pl8YK9Ah-IVSZ-Xp0c",
  authDomain: "whatsapp-clone-97e3c.firebaseapp.com",
  projectId: "whatsapp-clone-97e3c",
  storageBucket: "whatsapp-clone-97e3c.appspot.com",
  messagingSenderId: "451298491523",
  appId: "1:451298491523:web:071fc940a4ccef5111efb6",
};

//firebase methods
const CreateUser = async (userdata, updateUserDetails, navigate) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      userdata.email,
      userdata.password
    );
    const user = response._tokenResponse;
    updateUserDetails({
      userID: user.localId,
      email: user.email,
      usertoken: user.idToken,
    });
    alert("Login successfull");
    navigate("/mainpage");
  } catch (error) {
    alert(error.message);
  }
};
const AccountByGoogle = (updateUserDetails, navigate) => {
  const Provider = new GoogleAuthProvider();
  signInWithPopup(auth, Provider)
    .then((response) => {
      const user = response._tokenResponse;
      updateUserDetails({
        userID: user.localId,
        email: user.email,
        usertoken: user.idToken,
      });
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const firebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  return (
    <>
      <firebaseContext.Provider value={{ CreateUser, AccountByGoogle }}>
        {children}
      </firebaseContext.Provider>
    </>
  );
};
export const useFirebaseContext = () => useContext(firebaseContext);
export default FirebaseProvider;
