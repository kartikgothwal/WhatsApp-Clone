import React, { createContext, useContext, useState } from "react";
const userDataContext = createContext();

const UserContext = ({ children }) => {
  const [UserDetails, SetUserDetails] = useState({
    username: "",
    userID: "",
    useremail: "",
    usertoken: "",
  });
  console.log(UserDetails);
  const updateUserDetails = (newData) => {
    SetUserDetails((prevData) => {
      return {
        ...newData,
      };
    });
  };
  return (
    <>
      <userDataContext.Provider value={{ UserDetails, updateUserDetails }}>
        {children}
      </userDataContext.Provider>
    </>
  );
};

export default UserContext;
export const useUserContext = () => useContext(userDataContext);
