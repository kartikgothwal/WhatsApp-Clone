import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const UserMainPage = () => {
  return (
    <>
      <section className="h-screen p-8 bg-emerald-50">
        <main className=" h-full shadow-[0_2px_5px_rgba(11,20,26)] grid grid-cols-[30%_repeat(1,1fr)]">
          <section className="h-full  grid bg-white grid-rows-[59px_50px_repeat(1,1fr)]">
            <header
              className="h-full  grid grid-cols-[5rem_repeat(1,1fr)]"
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
            <aside className="h-full">  </aside>
            <div className="h-full"></div>
          </section>
          <section className="h-full border border-black"></section>
        </main>
      </section>
    </>
  );
};

export default UserMainPage;
