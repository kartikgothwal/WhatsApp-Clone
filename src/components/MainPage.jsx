import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useUserContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";
import UserMainPage from "./UserMainPage";
const MainPage = () => {
  const { UserDetails } = useUserContext();
  const navigate = useNavigate();
  return (
    <>
      {UserDetails.userID ? (
        <>
          <UserMainPage />
        </>
      ) : (
        <div className="h-screen flex flex-col justify-start gap-8 p-[5rem]">
          <h1 className="text-5xl font-bold font-custom"> Access Denied </h1>
          <p className="text-3xl">Error 404 not found</p>
          <button
            className="text-2xl h-[4rem] text-white  shadow-[rgba(255, 83, 48, 0.35)_0px_10px_15px_0px] rounded-xl bg-orange-500 w-[10rem]  font-mycustomfontRubik hover:bg-orange-600"
            onClick={() => {
              navigate("/");
            }}
          >
            Go to login
          </button>
        </div>
      )}
    </>
  );
};

export default MainPage;
