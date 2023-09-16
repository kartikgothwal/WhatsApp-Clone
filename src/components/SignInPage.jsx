import React, { useState } from "react";
import FrontImg from "../images/front.jpg";
import SignUp from "./Login&Register/SignUp";
import Login from "./Login&Register/Login";
const SignInPage = () => {
  const [btnChoice, SetBtnChoice] = useState("login");

  const AuthBtnClickHandler = (choice) => {
    choice === "login" ? SetBtnChoice("login") : SetBtnChoice("signup");
  };
  return (
    <>
      <section className="p-[3rem] h-screen bg-emerald-200 overflow-hidden">
        <div className=" shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden rounded-md bg-white h-full grid grid-cols-[30rem_1fr] ">
          <main className=" grid grid-rows-[8rem_repeat(1,1fr)]">
            <header className=" bg-zinc-600 text-white grid grid-rows-1 items-center justify-center ">
              <div className=" flex justify-center">
                <img
                  src="https://richestsoft.com/images/angular-images/whatsappclone-logo.webp"
                  alt="logo"
                  className="h-[6rem] w-[5rem] "
                />
              </div>
            </header>
            <main className="bg-emerald-100 py-3 grid grid-rows-[4rem_repeat(1,1fr)]">
              <div className="grid grid-cols-2 font-mycustomfontRubik font-bold uppercase justify-center">
                <button
                  className={`uppercase  ${
                    btnChoice === "login"
                      ? "bg-white rounded-tr-xl rounded-br-xl  font-bold text-zinc-600 transition-colors ease-in delay-75 duration-600  grid-span-1"
                      : ""
                  }`}
                  onClick={() => {
                    AuthBtnClickHandler("login");
                  }}
                >
                  Login
                </button>
                <button
                  className={`uppercase    ${
                    btnChoice === "signup"
                      ? "bg-white  font-bold rounded-tl-xl rounded-bl-xl   text-zinc-600 transition-colors ease-indelay-75  duration-600 "
                      : ""
                  }`}
                  onClick={() => {
                    AuthBtnClickHandler("signup");
                  }}
                >
                  Sign up
                </button>
              </div>
              <form className=" grid py-7 px-16 font-mycustomfontRubik grid-rows-[4rem_4rem_4rem_4rem] gap-3 items-center justify-center h-full ">
                {btnChoice === "signup" ? <SignUp /> : <Login />}
              </form>
            </main>
          </main>
          <aside className="flex items-center bg-orange-50">
            <img src={FrontImg} alt="cover" className="bg-contain bg-center" />
          </aside>
        </div>
      </section>
    </>
  );
};

export default SignInPage;
