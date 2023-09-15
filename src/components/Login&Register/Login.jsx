import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Login = () => {
  const [visibility, setVisibility] = useState(false);
  const [userData, setUserData] = useState({
    loginemail: "",
    loginpassword: "",
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
    console.log(userData);
  };
  return (
    <>
      <div className=" w-[20rem] gap-4  flex flex-col">
        <label htmlFor="email">
          Email Address <span className="text-red-800">*</span>
        </label>
        <input
          type="email"
          className="font-textColor outline-none bg-transparent border-1 border-black border-b-2"
          name="loginemail"
          id="email"
          value={userData.loginemail}
          onChange={handleChange}
        />
      </div>
      <div className="w-[20rem] gap-4 flex flex-col">
        <label htmlFor="password">
          Password <span className="text-red-800">*</span>
        </label>
        <div className="w-100 flex border-1 border-black border-b-2">
          <input
            type={`${visibility ? "text" : "password"}`}
            className="text-fontTextColor outline-none w-full bg-transparent "
            name="loginpassword"
            id="password"
            value={userData.loginpassword}
            onChange={handleChange}
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
      <button className="bg-green-500 h-12 mt-10 shadow-[0_1px_3px_rgba(23,23,23,0.24)] text-white rounded-lg transition-colors duration-300 hover:bg-green-700" onClick={handleClick}>
        Login
      </button>
      <footer className="  h-full flex flex-col">
        <button className="bg-white my-2 h-12 shadow-[0_1px_3px_rgba(23,23,23,0.24)] text-white rounded-lg transition-colors duration-300 hover:bg-slate-100 grid grid-cols-[2rem_1fr] px-4 items-center">
          <img
            src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png"
            alt="google icons"
            className=" h-7 w-7"
          />
          <span className="text-black ">Sign in with Google</span>
        </button>
      </footer>
    </>
  );
};

export default Login;
