import React from "react";
import SignInPage from "./components/SignInPage.jsx";
import MainPage from "./components/MainPage.jsx";
import UserContextProvider from "./components/context/UserContext.js";
import FirebaseProvider from "./components/context/firebase.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <UserContextProvider>
        <FirebaseProvider>
          <Router>
            <Routes>
              <Route path="/" element={<SignInPage />} />
              <Route path="/mainpage" element={<MainPage />} />
            </Routes>
          </Router>
        </FirebaseProvider>
      </UserContextProvider>
    </>
  );
};

export default App;
