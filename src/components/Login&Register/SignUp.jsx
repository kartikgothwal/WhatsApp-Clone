import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFirebaseContext } from "../context/firebase";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { CreateUser, AccountByGoogle } = useFirebaseContext();
  const navigate = useNavigate();
  const { updateUserDetails } = useUserContext();
  const [visibility, setVisibility] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserData((prevdata) => {
      return {
        ...prevdata,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (!userData.username || !userData.password) {
      alert("Please complete the fields");
      return;
    }
    CreateUser(userData, updateUserDetails, navigate);
  };

  const handleClickByGoogle = (e) => {
    e.preventDefault();
    AccountByGoogle(updateUserDetails, navigate);
  };
  return (
    <>
      <div className=" w-[20rem] gap-[0.4rem] flex flex-col">
        <label htmlFor="username">
          Fullname <span className="text-red-800">*</span>
        </label>
        <input
          type="text"
          className="font-textColor outline-none bg-transparent border-1 border-black border-b-2"
          name="username"
          id="username"
          value={userData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className=" w-[20rem] gap-[0.4rem]  flex flex-col">
        <label htmlFor="email">
          Email Address <span className="text-red-800">*</span>
        </label>
        <input
          type="email"
          className="font-textColor outline-none bg-transparent border-1 border-black border-b-2"
          name="email"
          id="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="w-[20rem] gap-[0.4rem] flex flex-col">
        <label htmlFor="password">
          Password <span className="text-red-800">*</span>
        </label>
        <div className="w-100 flex border-1 border-black border-b-2">
          <input
            type={`${visibility ? "text" : "password"}`}
            className="text-fontTextColor outline-none w-full bg-transparent "
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
            required
          />

          <div
            onClick={() => {
              setVisibility(!visibility);
            }}
          >
            {visibility ? (
              <VisibilityIcon
                style={{
                  cursor: "pointer",
                }}
              />
            ) : (
              <VisibilityOffIcon
                style={{
                  cursor: "pointer",
                }}
              />
            )}
          </div>
        </div>
      </div>
      <button
        className="bg-green-500 h-12  shadow-[0_1px_3px_rgba(23,23,23,0.24)] text-white rounded-lg transition-colors duration-300 hover:bg-green-700"
        onClick={handleClick}
      >
        Sign up
      </button>
      <footer className="  h-full flex flex-col">
        <button
          className="bg-white  h-12 shadow-[0_1px_3px_rgba(23,23,23,0.24)] text-white rounded-lg transition-colors duration-300 hover:bg-slate-100 grid grid-cols-[2rem_1fr] px-4 items-center"
          onClick={handleClickByGoogle}
        >
          <img
            src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png"
            alt="google icons"
            className=" h-7 w-7"
          />
          <span className="text-black">Sign up with Google</span>
        </button>
      </footer>
    </>
  );
};

export default SignUp;
