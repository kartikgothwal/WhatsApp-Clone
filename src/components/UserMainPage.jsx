import React, { useEffect, useRef, useState } from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";
import DuoIcon from "@mui/icons-material/Duo";
import MoodIcon from "@mui/icons-material/Mood";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import "../App.css";
import { useUserContext } from "./context/UserContext";
import { useFirebaseContext } from "./context/firebase";
import SendIcon from "@mui/icons-material/Send";
import { database } from "./context/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
const UserMainPage = () => {
  const { GetUser, GetMessages, SendMessage, GetLastMessages } =
    useFirebaseContext();
  const chatContainerRef = useRef(null);
  const [CurrentUserData, SetCurrentUserData] = useState({});
  const { UserDetails } = useUserContext();
  const friendChoice = useRef([]);
  const [AllFriends, SetAllFriends] = useState([]);
  const [Friend, setFriend] = useState({});
  const [Messages, SetMessages] = useState([]);
  const [lastMessages, SetLastMessages] = useState([]);
  const [NewUserMessages, setNewuserMessages] = useState({
    id: "",
    message: "",
  });
  const [ChatdisplayVal, SetChatdisplayVal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        await GetUser(SetCurrentUserData, UserDetails, SetAllFriends);
      } catch (error) {
        alert("Error fetching data:", error);
      }
    }
    fetchData();
  }, [UserDetails]);

  useEffect(() => {
    if (AllFriends.length && CurrentUserData.id) {
      GetLastMessages(CurrentUserData, AllFriends, SetLastMessages);
    }
  }, [AllFriends, Messages]);

  const updateRef = (index) => (ref) => {
    friendChoice.current[index] = ref;
  };

  const handleChatRequestClick = (index) => {
    SetChatdisplayVal(!ChatdisplayVal);
    setFriend(AllFriends[index]);
    GetMessages(SetMessages, AllFriends[index], CurrentUserData);
  };
  const HandleMessageInputChange = (e) => {
    setNewuserMessages((prevData) => {
      return {
        [e.target.name]: e.target.value,
        id: CurrentUserData.id,
      };
    });
  };

  const HandleSendMessaeBtn = (e) => {
    e.preventDefault();
    if (!NewUserMessages.message || !NewUserMessages.id) {
      return;
    }
    const date = new Date();
    let dateHours = date.getHours();
    let dateMinute = date.getMinutes();
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((data) => {
      if (data == date.getHours()) {
        dateHours = "0" + date.getHours();
      }
    });

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((data) => {
      if (data == date.getMinutes()) {
        dateMinute = "0" + date.getMinutes();
      }
    });

    const dateData = dateHours + ":" + dateMinute;

    SendMessage(CurrentUserData, Friend, NewUserMessages, dateData);

    const CollectionRef = collection(
      database,
      `users/${CurrentUserData.id}/friends/${Friend.id}/messages`
    );
    const orderedCollectionRef = query(CollectionRef, orderBy("timestamp"));
    onSnapshot(orderedCollectionRef, (data) => {
      SetMessages(
        data.docs.map((items) => {
          return { ...items.data() };
        })
      );
    });
    setNewuserMessages((prevData) => {
      return {
        ...prevData,
        message: "",
      };
    });
  };

  return (
    <>
      {CurrentUserData.id || AllFriends.length ? (
        <section className="h-screen sm:p-8 bg-gray-200 ">
          <main
            className={`overflow-hidden h-full shadow-[0px_2px_2px_rgba(11,20,26)] grid ${
              ChatdisplayVal
                ? "grid-cols-[0%_repeat(1,1fr)]"
                : "grid-cols-[100%_repeat(1,1fr)]"
            }     sm:grid-cols-[50%_repeat(1,1fr)] md:grid-cols-[50%_repeat(1,1fr)] lg:md:grid-cols-[30%_repeat(1,1fr)]`}
          >
            <section className="h-full grid bg-white grid-rows-[59px_50px_repeat(1,1fr)] overflow-hidden">
              <header
                className="h-full grid grid-cols-[4rem_repeat(1,1fr)]"
                style={{
                  background: "#f0f2f5",
                }}
              >
                <div className=" flex justify-center items-center">
                  <img
                    src="https://cdn.statusqueen.com/dpimages/thumbnail/Funny_Whatsapp_dp_image-1409.jpg"
                    alt="Dp"
                    className="rounded-full h-11 w-11 cursor-pointer"
                  />
                </div>
                <div className="flex justify-evenly sm:justify-end items-center gap-6 pr-3">
                  <GroupsIcon
                    style={{
                      color: "#54656f",
                      // color: "#ffffff",
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                  />
                  <DataSaverOffIcon
                    style={{
                      color: "#54656f",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                  />
                  <AddCommentIcon
                    style={{
                      color: "#54656f",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                  />
                  <MoreVertIcon
                    style={{
                      color: "#54656f",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </header>
              <aside className="border-b-[1px] justify-center items-center pl-3  pr-0 h-full grid grid-cols-[repeat(1,1fr)_3rem]">
                <div
                  className=" h-[2.5rem] rounded-[8px] flex items-center px-1  "
                  style={{
                    background: "#f0f2f5",
                  }}
                >
                  <SearchIcon
                    className="cursor-pointer  text-gray-500"
                    style={{
                      fontSize: "19px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Search or start a new chat"
                    className="pl-5 outline-none w-[19rem] bg-transparent text-gray-500  text-sm pt-[10px]  items-center"
                  />
                  <ClearIcon
                    className="cursor-pointer text-gray-500  "
                    style={{
                      fontSize: "18px",
                    }}
                  />
                </div>
                <FilterListIcon
                  style={{
                    marginLeft: "10px",
                    color: "#54656f",
                  }}
                />
              </aside>
              <div className="h-full overflow-auto scroller_property">
                {AllFriends.map((friendsItems, index) => {
                  return (
                    <article
                      key={index}
                      ref={updateRef(index)}
                      className="w-full flex h-[72px] cursor-pointer  hover:bg-gray-100"
                      onClick={() => {
                        handleChatRequestClick(index);
                      }}
                    >
                      <figure className="overflow-hidden pl-[5px] w-[5rem] h-full flex items-center justify-center">
                        <img
                          src={friendsItems.profileImg}
                          alt="user_img"
                          className="rounded-[40px] h-[3.5rem] w-[3.5rem] overflow-hidden"
                        />
                      </figure>
                      <div className="border-y-[1px] grid grid-cols-[18rem_repeat(1,1fr)] md:grid-cols-[20rem_repeat(1,1fr)]  items-center w-full h-full border-collapse overflow-hidden">
                        <div className="h-full flex flex-col justify-center pl-2 w-full">
                          <h1 className="text-left h-[2rem] w-full">
                            {friendsItems.name}
                          </h1>
                          <p
                            style={{
                              color: "#54656f",
                            }}
                            className="text-sm truncate   h-[1.5rem] w-full overflow-hidden"
                          >
                            message:{" "}
                            {lastMessages.length && lastMessages[index].message}
                          </p>
                        </div>
                        <ExpandMoreIcon
                          style={{
                            color: "#54656f",
                          }}
                        />
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
            <section
              className="h-full relative scroller_property "
              style={{
                background: "#efeae2",
              }}
            >
              {Friend.id ? (
                <div className="h-full relative grid grid-rows-[3.67rem_repeat(1,1fr)_7rem] ">
                  <header
                    className=" z-100 grid  grid-cols-[4rem__repeat(1,1fr)_7rem] lg:grid-cols-[7rem__repeat(1,1fr)_7rem]"
                    style={{
                      background: "#f0f2f5",
                    }}
                  >
                    <figure className="pl-1 lg:pl-[2rem] w-[3rem] lg:w-[5rem] h-full flex items-center justify-center">
                      <img
                        src={Friend.profileImg}
                        alt="user_img"
                        className="rounded-[40px] h-[2.8rem]"
                      />
                    </figure>
                    <div className="flex flex-col justify-center ">
                      {Friend.name && <h1>{Friend.name}</h1>}
                      <p className="text-gray-500 text-sm">Today</p>
                    </div>
                    <div className="block sm:hidden p-3">
                      <button
                        className=" bg-black text-white font-mycustomfontRubik flex justify-center items-center h-8 rounded-lg w-20"
                        onClick={() => {
                          SetChatdisplayVal(!ChatdisplayVal);
                        }}
                      >
                        Go Back
                      </button>
                    </div>
                    <div className="hidden sm:flex justify-end items-center h-full w-full pr-6 gap-3 lg:gap-10">
                      <DuoIcon
                        style={{
                          color: "#54656f",
                          // color: "#ffffff",
                          fontSize: "32px",
                          cursor: "pointer",
                          border: "1px solid #54656f",
                          padding: "4px 15px ",
                          width: "4rem",
                          borderRadius: "20px",
                        }}
                      />
                      <SearchIcon
                        style={{
                          color: "#54656f",
                          // color: "#ffffff",
                          fontSize: "25px",
                          cursor: "pointer",
                        }}
                      />
                      <MoreVertIcon
                        className="hidden sm:block"
                        style={{
                          color: "#54656f",
                          // color: "#ffffff",
                          fontSize: "25px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </header>

                  <main
                    ref={chatContainerRef}
                    className="relative w-full h-full overflow-auto scroller_property bg-center  bg-no-repeat bg-cover"
                  >
                    <div className="absolute w-full  top-0  opacity-[0.4] left-0 custom-background h-full overflow-hidden"></div>

                    <div className="overflow-auto relative h-[45rem] md:h-[40rem] 2xl:h-[34rem] w-full px-5 md:px-10 py-2 scroller_property">
                      <div className="relative flex items-end flex-col gap-2 h-full w-full">
                        {Messages.length &&
                          Messages.map((messageData, index) => {
                            return (
                              <div
                                key={index}
                                role="row"
                                className={`relative z-1000 w-full  flex ${
                                  messageData.id == Friend.id
                                    ? "justify-end"
                                    : "justify-start"
                                }`}
                              >
                                <p
                                  className="opacity-100 break-words max-w-[15rem] lg:max-w-[35rem] h-full text-sm inline-block relative px-5 py-1 rounded-md bg-orange-300"
                                  style={{
                                    backgroundColor: "#fefffe",
                                    color: "#111b21",
                                  }}
                                >
                                  {messageData.message}
                                </p>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </main>

                  <div
                    className="grid grid-cols-[4rem_repeat(1,1fr)_3rem]  items-start pt-2 md:grid-cols-[7rem_repeat(1,1fr)_5rem]"
                    style={{
                      background: "#f0f2f5",
                    }}
                  >
                    <div className="flex justify-evenly items-center h-12 ">
                      <MoodIcon
                        style={{
                          color: "#54656f",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                      />
                      <AddIcon
                        style={{
                          color: "#54656f",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    <div className=" justify-center flex items-center ">
                      <input
                        type="text"
                        name="message"
                        placeholder="Type a message"
                        className="bg-white w-full h-11 px-5 rounded-xl outline-none text-sm text-gray-800"
                        value={NewUserMessages.message}
                        onChange={HandleMessageInputChange}
                      />
                    </div>
                    <div className="flex items-center justify-center  h-12 ">
                      {!NewUserMessages.message ? (
                        <MicIcon
                          style={{
                            color: "#54656f",
                            fontSize: "30px",
                            cursor: "pointer",
                          }}
                        />
                      ) : (
                        <SendIcon
                          style={{
                            color: "#54656f",
                            fontSize: "30px",
                            cursor: "pointer",
                          }}
                          onClick={HandleSendMessaeBtn}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 hidden sm:block  h-full w-full NoBackground"></div>
              )}
            </section>
          </main>
        </section>
      ) : (
        <h1>Please wait setting up data for you</h1>
      )}
    </>
  );
};

export default UserMainPage;
