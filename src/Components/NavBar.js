import React from "react";
import { Link } from "react-router-dom";

import profile from '../Assets/Images/profile.jpg'

const NavBar = () => {
  return (
    <div className="navbar pt-5 bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost p-0 text-2xl">
          奈門 Locker
        </Link>
      </div>
      <div className="flex-none gap-4">
        <div className="form-control hidden sm:flex">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered focus:outline-offset-0 w-24 md:w-auto"
          />
        </div>
        <div className="avatar">
          <div className="ring-[#De2910] ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
            <img alt="Profile" src={profile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
