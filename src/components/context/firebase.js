import { CloseFullscreen } from "@mui/icons-material";
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
  onSnapshot,
  query,
  where,
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
// FriendsDocs
const Friends = [
  {
    name: "Elon Musk",
    profileImg:
      "https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/5/96/5962d58c-00ad-5a9a-a1da-adad2ca6a127/6447ca23291e4.image.jpg?resize=1200%2C812",
    ID: "3TCH2X9mTA8jrtT1iCyn",
  },
  {
    name: "Jeff Bezoz",
    profileImg:
      "https://e3.365dm.com/21/07/1600x900/skynews-jeff-bezos-amazon_5437859.jpg?20210705134847",
    ID: "eDbEBGwffVRjI0pvoIkD",
  },
  {
    name: "Narendra Modi",
    profileImg:
      "https://i1.sndcdn.com/avatars-000647693748-k3ef4g-t500x500.jpg",
    ID: "cnRAKoXsb0J6xvRoo41J",
  },
  {
    name: "Mark Zuckerberg",
    profileImg: "https://i.kym-cdn.com/photos/images/newsfeed/002/363/222/a71",
    ID: "ID60NH6goXOx402PsW8i",
  },
];
//AddingFriends List
const AddFriendsListToUser = async (user, username) => {
  const CollectionRef = collection(database, "users");
  await addDoc(CollectionRef, {
    username: username,
    userID: user.localId,
    useremail: user.email,
    usertoken: user.idToken,
  }).then((response) => {
    Friends.forEach((data) => {
      const SubCollectionRef = collection(
        database,
        `users/${response.id}/friends`
      );
      addDoc(SubCollectionRef, {
        ...data,
      });
    });
    alert(`Welcome ${username} `);
  });
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
    AddFriendsListToUser(user, userdata.username);
    navigate("/mainpage");
  } catch (error) {
    alert(error.message);
  }
};
const AccountByGoogle = async (updateUserDetails, navigate) => {
  const UserCollectionRef = collection(database, "users");
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
      const q = query(UserCollectionRef, where("useremail", "==", user.email));
      getDocs(q)
        .then((response) => {
          const choice = response.docs.length ? false : true;
          if (choice) {
            AddFriendsListToUser(user, user.fullName);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });

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
