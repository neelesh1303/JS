import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed bottom-3 left-0 right-0 z-50">
      <div className="flex justify-center">
        <div className="w-full z-50 flex justify-center items-center bg-blue-400 py-5 px-10 max-w-max rounded-lg">
          <NavLink to="/" className="mx-6 px-2" >
            <img loading="eager" alt="" src="./img/home.svg" />
          </NavLink>
          <NavLink to="/community" className="mx-6 px-2" >
            <img loading="eager" alt="" src="./img/community.svg" />
          </NavLink>
          <NavLink to="/profile" className="mx-6 px-2" >
            <img
              loading="eager"
              alt=""
              src="./img/people.svg"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
