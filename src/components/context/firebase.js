import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
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
      username: userdata.username,
      userID: user.localId,
      useremail: user.email,
      usertoken: user.idToken,
    });
    const doc = addDoc(database, "users", {});
    alert(`Welcome ${userdata.username} `);
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
        username: user.fullName,
        userID: user.localId,
        useremail: user.email,
        usertoken: user.idToken,
      });
      alert(`Welcome ${user.fullName} `);
      navigate("/mainpage");
    })
    .catch((error) => {
      alert(error.message);
    });
};

const UserLogin = async (userData, updateUserDetails, navigate) => {
  console.log(userData);
  await signInWithEmailAndPassword(
    auth,
    userData.loginemail,
    userData.loginpassword
  )
    .then((response) => {
      const user = response._tokenResponse;
      updateUserDetails({
        username: user.fullName,
        userID: user.localId,
        useremail: user.email,
        usertoken: user.idToken,
      });
      alert(`Welcome Back `);
      navigate("/mainpage");
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

const firebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  return (
    <>
      <firebaseContext.Provider
        value={{ CreateUser, AccountByGoogle, UserLogin }}
      >
        {children}
      </firebaseContext.Provider>
    </>
  );
};
export const useFirebaseContext = () => useContext(firebaseContext);
export default FirebaseProvider;
