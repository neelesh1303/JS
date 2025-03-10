import React from "react";
import { useNavigate } from "react-router-dom";
import EventList from "./EventList";
import eventsData from "../data/events.json";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      <div className="flex justify-between bg-gradient-to-b from-sky-700 to-white">
        <div className="flex items-center p-3 z-10">
          <img
            src="/img/square.jpg"
            alt="img"
            className="rounded-full mix-blend-multiply h-50 w-50 mx-3"
            width={50}
            height={50}
          />
          <div>
            <p>Hi, </p>
            <p className="font-semibold text-xl">{localStorage.getItem("name")}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={() => navigate("/notification")}>
            <img src="/img/bell.png" alt="bell" className=" w-8 h-8 mx-2" />
          </button>
          <button onClick={() => navigate("/profile")}>
            <img src="/img/profile-user.png" alt="profile" className="w-8 h-8 mx-2" />
          </button>
        </div>
      </div>
      <div className="relative">
        <img
          src="/img/girl-looking-landscape.jpg"
          alt="img"
          className="mix-blend-multiply rounded-md m-5 h-60 w-full object-cover"
          width={100}
          height={100}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white font-bold mb-4 md:text-3xl">
            Empowering women to live their life without fear.
          </h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
      <div className="m-5">
        <p className="font-semibold">
          Reported by <span className=" text-cyan-600">you</span>
        </p>
        <div className="mx-auto z-0">
          <EventList eventsData={eventsData} />
        </div>
      </div>
      <div className="m-5">
        <p className="font-semibold">
          Recents near <span className=" text-cyan-600">you</span>
        </p>
        <div className="mx-auto z-0">
          <EventList eventsData={eventsData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;