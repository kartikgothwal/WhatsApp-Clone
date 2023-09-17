import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";
import "../App.css";
const UserMainPage = () => {
  return (
    <>
      <section className="h-screen p-8 bg-gray-200 ">
        <main className=" h-full shadow-[0px_2px_2px_rgba(11,20,26)] grid grid-cols-[30%_repeat(1,1fr)] ">
          <section className="h-full grid bg-white grid-rows-[59px_50px_repeat(1,1fr)] overflow-hidden">
            <header
              className="h-full grid grid-cols-[5rem_repeat(1,1fr)]"
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
              <div className="flex justify-end items-center gap-6 pr-3">
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
                className=" h-[2.5rem] rounded-[8px]  pl-4"
                style={{
                  background: "#f0f2f5",
                }}
              >
                <SearchIcon
                  className="cursor-pointer text-gray-500"
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
              <article className="  w-full flex h-[72px] cursor-pointer hover:bg-gray-100  ">
                <figure className=" pl-[5px] w-[5rem] h-full flex items-center justify-center">
                  <img
                    src="https://pps.whatsapp.net/v/t61.24694-24/369575505_693071492690114_4103489596512533221_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRWSVux9RZVqYAGn-KpyzZwe3JHIv4-pOTRLTkrAP_LuA&oe=651444C9&_nc_sid=000000&_nc_cat=106"
                    alt="user_img"
                    className="rounded-[40px] h-[3.5rem]"
                  />
                </figure>
                <div className="border-y-[1px] flex items-center w-full h-full border-collapse">
                  <div className="  h-full flex flex-col justify-center pl-2 w-full">
                    <h1 className="text-left">Kartik gothwal</h1>
                    <p
                      style={{
                        color: "#54656f",
                      }}
                      className="text-sm"
                    >
                      Kartik : This is the message
                    </p>
                  </div>
                  <ExpandMoreIcon
                    style={{
                      color: "#54656f",
                    }}
                  />
                </div>
              </article>

              <article className="  w-full flex h-[72px] cursor-pointer hover:bg-gray-100  ">
                <figure className=" pl-[5px] w-[5rem] h-full flex items-center justify-center">
                  <img
                    src="https://pps.whatsapp.net/v/t61.24694-24/369575505_693071492690114_4103489596512533221_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRWSVux9RZVqYAGn-KpyzZwe3JHIv4-pOTRLTkrAP_LuA&oe=651444C9&_nc_sid=000000&_nc_cat=106"
                    alt="user_img"
                    className="rounded-[40px] h-[3.5rem]"
                  />
                </figure>
                <div className="border-y-[1px] flex items-center w-full h-full border-collapse">
                  <div className="  h-full flex flex-col justify-center pl-2 w-full">
                    <h1 className="text-left">Kartik gothwal</h1>
                    <p
                      style={{
                        color: "#54656f",
                      }}
                      className="text-sm"
                    >
                      Kartik : This is the message
                    </p>
                  </div>
                  <ExpandMoreIcon
                    style={{
                      color: "#54656f",
                    }}
                  />
                </div>
              </article>

              <article className="  w-full flex h-[72px] cursor-pointer hover:bg-gray-100  ">
                <figure className=" pl-[5px] w-[5rem] h-full flex items-center justify-center">
                  <img
                    src="https://pps.whatsapp.net/v/t61.24694-24/369575505_693071492690114_4103489596512533221_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRWSVux9RZVqYAGn-KpyzZwe3JHIv4-pOTRLTkrAP_LuA&oe=651444C9&_nc_sid=000000&_nc_cat=106"
                    alt="user_img"
                    className="rounded-[40px] h-[3.5rem]"
                  />
                </figure>
                <div className="border-y-[1px] flex items-center w-full h-full border-collapse">
                  <div className="  h-full flex flex-col justify-center pl-2 w-full">
                    <h1 className="text-left">Kartik gothwal</h1>
                    <p
                      style={{
                        color: "#54656f",
                      }}
                      className="text-sm"
                    >
                      Kartik : This is the message
                    </p>
                  </div>
                  <ExpandMoreIcon
                    style={{
                      color: "#54656f",
                    }}
                  />
                </div>
              </article>

              <article className="  w-full flex h-[72px] cursor-pointer hover:bg-gray-100  ">
                <figure className=" pl-[5px] w-[5rem] h-full flex items-center justify-center">
                  <img
                    src="https://pps.whatsapp.net/v/t61.24694-24/369575505_693071492690114_4103489596512533221_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRWSVux9RZVqYAGn-KpyzZwe3JHIv4-pOTRLTkrAP_LuA&oe=651444C9&_nc_sid=000000&_nc_cat=106"
                    alt="user_img"
                    className="rounded-[40px] h-[3.5rem]"
                  />
                </figure>
                <div className="border-y-[1px] flex items-center w-full h-full border-collapse">
                  <div className="  h-full flex flex-col justify-center pl-2 w-full">
                    <h1 className="text-left">Kartik gothwal</h1>
                    <p
                      style={{
                        color: "#54656f",
                      }}
                      className="text-sm"
                    >
                      Kartik : This is the message
                    </p>
                  </div>
                  <ExpandMoreIcon
                    style={{
                      color: "#54656f",
                    }}
                  />
                </div>
              </article>

              <article className="  w-full flex h-[72px] cursor-pointer hover:bg-gray-100  ">
                <figure className=" pl-[5px] w-[5rem] h-full flex items-center justify-center">
                  <img
                    src="https://pps.whatsapp.net/v/t61.24694-24/369575505_693071492690114_4103489596512533221_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRWSVux9RZVqYAGn-KpyzZwe3JHIv4-pOTRLTkrAP_LuA&oe=651444C9&_nc_sid=000000&_nc_cat=106"
                    alt="user_img"
                    className="rounded-[40px] h-[3.5rem]"
                  />
                </figure>
                <div className="border-y-[1px] flex items-center w-full h-full border-collapse">
                  <div className="  h-full flex flex-col justify-center pl-2 w-full">
                    <h1 className="text-left">Kartik gothwal</h1>
                    <p
                      style={{
                        color: "#54656f",
                      }}
                      className="text-sm"
                    >
                      Kartik : This is the message
                    </p>
                  </div>
                  <ExpandMoreIcon
                    style={{
                      color: "#54656f",
                    }}
                  />
                </div>
              </article>

              <article className="  w-full flex h-[72px] cursor-pointer hover:bg-gray-100  ">
                <figure className=" pl-[5px] w-[5rem] h-full flex items-center justify-center">
                  <img
                    src="https://pps.whatsapp.net/v/t61.24694-24/369575505_693071492690114_4103489596512533221_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRWSVux9RZVqYAGn-KpyzZwe3JHIv4-pOTRLTkrAP_LuA&oe=651444C9&_nc_sid=000000&_nc_cat=106"
                    alt="user_img"
                    className="rounded-[40px] h-[3.5rem]"
                  />
                </figure>
                <div className="border-y-[1px] flex items-center w-full h-full border-collapse">
                  <div className="  h-full flex flex-col justify-center pl-2 w-full">
                    <h1 className="text-left">Kartik gothwal</h1>
                    <p
                      style={{
                        color: "#54656f",
                      }}
                      className="text-sm"
                    >
                      Kartik : This is the message
                    </p>
                  </div>
                  <ExpandMoreIcon
                    style={{
                      color: "#54656f",
                    }}
                  />
                </div>
              </article>

              <article className="  w-full flex h-[72px] cursor-pointer hover:bg-gray-100  ">
                <figure className=" pl-[5px] w-[5rem] h-full flex items-center justify-center">
                  <img
                    src="https://pps.whatsapp.net/v/t61.24694-24/369575505_693071492690114_4103489596512533221_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRWSVux9RZVqYAGn-KpyzZwe3JHIv4-pOTRLTkrAP_LuA&oe=651444C9&_nc_sid=000000&_nc_cat=106"
                    alt="user_img"
                    className="rounded-[40px] h-[3.5rem]"
                  />
                </figure>
                <div className="border-y-[1px] flex items-center w-full h-full border-collapse">
                  <div className="  h-full flex flex-col justify-center pl-2 w-full">
                    <h1 className="text-left">Kartik gothwal</h1>
                    <p
                      style={{
                        color: "#54656f",
                      }}
                      className="text-sm"
                    >
                      Kartik : This is the message
                    </p>
                  </div>
                  <ExpandMoreIcon
                    style={{
                      color: "#54656f",
                    }}
                  />
                </div>
              </article>

              <article className="  w-full flex h-[72px] cursor-pointer hover:bg-gray-100  ">
                <figure className=" pl-[5px] w-[5rem] h-full flex items-center justify-center">
                  <img
                    src="https://pps.whatsapp.net/v/t61.24694-24/369575505_693071492690114_4103489596512533221_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRWSVux9RZVqYAGn-KpyzZwe3JHIv4-pOTRLTkrAP_LuA&oe=651444C9&_nc_sid=000000&_nc_cat=106"
                    alt="user_img"
                    className="rounded-[40px] h-[3.5rem]"
                  />
                </figure>
                <div className="border-y-[1px] flex items-center w-full h-full border-collapse">
                  <div className="  h-full flex flex-col justify-center pl-2 w-full">
                    <h1 className="text-left">Kartik gothwal</h1>
                    <p
                      style={{
                        color: "#54656f",
                      }}
                      className="text-sm"
                    >
                      Kartik : This is the message
                    </p>
                  </div>
                  <ExpandMoreIcon
                    style={{
                      color: "#54656f",
                    }}
                  />
                </div>
              </article>

              <article className="  w-full flex h-[72px] cursor-pointer hover:bg-gray-100  ">
                <figure className=" pl-[5px] w-[5rem] h-full flex items-center justify-center">
                  <img
                    src="https://pps.whatsapp.net/v/t61.24694-24/369575505_693071492690114_4103489596512533221_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRWSVux9RZVqYAGn-KpyzZwe3JHIv4-pOTRLTkrAP_LuA&oe=651444C9&_nc_sid=000000&_nc_cat=106"
                    alt="user_img"
                    className="rounded-[40px] h-[3.5rem]"
                  />
                </figure>
                <div className="border-y-[1px] flex items-center w-full h-full border-collapse">
                  <div className="  h-full flex flex-col justify-center pl-2 w-full">
                    <h1 className="text-left">Kartik gothwal</h1>
                    <p
                      style={{
                        color: "#54656f",
                      }}
                      className="text-sm"
                    >
                      Kartik : This is the message
                    </p>
                  </div>
                  <ExpandMoreIcon
                    style={{
                      color: "#54656f",
                    }}
                  />
                </div>
              </article>
            </div>
          </section>
          <section
            className="h-full relative grid grid-rows-[3.67rem_repeat(1,1fr)_4rem] "
            style={{
              background: "#efeae2",
            }}
          >
            <header
              className=" border z-100 bg border-black "
              style={{
                background: "#f0f2f5",
              }}
            ></header>

            <main className="border w-full z-10 opacity-[0.4] border-black bg-center bg-no-repeat bg-cover">
              <div className="absolute z-10 top-0 left-0 custom-background h-full overflow-hidden"></div>
            </main>

            <div className="border  border-black"></div>
          </section>
        </main>
      </section>
    </>
  );
};

export default UserMainPage;
