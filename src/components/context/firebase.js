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
  doc,
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
      "https://i.pinimg.com/736x/df/61/a1/df61a19237753b3064071972b3856043.jpg",
    ID: "3TCH2X9mTA8jrtT1iCyn",
  },
  {
    name: "Jeff Bezoz",
    profileImg:
      "https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.861xh;0,0.0205xh&resize=1200:*",
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

//InitialMessages
const InitialMessages = [
  {
    id: "",
    message: "Come to Mars with me",
  },
  {
    id: "",
    message: "Dont go with elon",
  },
  {
    id: "",
    message: "Mitro, aache din is loading",
  },
  {
    id: "",
    message: "Mitro, aache din is loading",
  },
  {
    id: "",
    message: "Trust me, Thread is better than Twitter",
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
      }).then((response)=>{
        
      })
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
  try {
    const response = await signInWithPopup(auth, Provider);
    const user = response._tokenResponse;
    // Update user details
    updateUserDetails({
      username: user.fullName,
      userID: user.localId,
      useremail: user.email,
      usertoken: user.idToken,
    });

    const q = query(UserCollectionRef, where("useremail", "==", user.email));
    const querySnapshot = await getDocs(q);

    const choice = querySnapshot.docs.length === 0;
    if (choice) {
      await AddFriendsListToUser(user, user.fullName);
    }
    navigate("/mainpage");
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
};

const UserLogin = async (userData, updateUserDetails, navigate) => {
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

const GetUser = (SetCurrentUserData, UserDetails, SetAllFriends) => {
  const CollectionRef = collection(database, "users");
  const q = query(
    CollectionRef,
    where("useremail", "==", UserDetails.useremail)
  );
  getDocs(q)
    .then((response) => {
      const data = response.docs.map((items) => {
        return { ...items.data(), id: items.id };
      });
      const user = data[0];
      GetAllFriends(user, SetAllFriends);
      SetCurrentUserData(user);
    })
    .catch((error) => {
      alert(error.message);
    });
};
const GetAllFriends = async (CurrentUserData, SetAllFriends) => {
  const CollectionRef = collection(
    database,
    `users/${CurrentUserData.id}/friends`
  );
  await getDocs(CollectionRef)
    .then((response) => {
      const friends = response.docs.map((items) => {
        return { ...items.data(), id: items.id };
      });
      SetAllFriends(friends);
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);

const firebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  return (
    <>
      <firebaseContext.Provider
        value={{
          CreateUser,
          AccountByGoogle,
          UserLogin,
          GetUser,
          GetAllFriends,
        }}
      >
        {children}
      </firebaseContext.Provider>
    </>
  );
};
export const useFirebaseContext = () => useContext(firebaseContext);
export default FirebaseProvider;
