import React, { useState } from "react";
import Logo from "../images/logo.svg";
import {
  HomeIcon,
  ClipboardIcon,
  FolderIcon,
  CogIcon,
  CalendarIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [sideBarShown, setSideBarShown] = useState(false);

  return (
    <div className="bg-indigo-900 z-50">
      <div className="flex justify-between text-white py-5 items-center">
        <img src={Logo} alt="moriba-logo" className="max-h-6" />

        <button
          className="focus:outline-none block lg:hidden"
          onClick={() => setSideBarShown({ active: !sideBarShown.active })}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        </button>
      </div>
      <hr className="rounded opacity-25" />
      <div
        className={`nav-link flex flex-col justify-between absolute font-medium text-white transition-all duration-200 ease-in-out bg-indigo-900 z-50 w-full px-3 ${
          sideBarShown.active
            ? "h-2/5 overflow-auto pt-5"
            : "h-0 overflow-hidden"
        }  `}
      >
        <NavLink to="/" exact className="flex items-center">
          <HomeIcon className="h-6 w-6" />
          Dashboard
        </NavLink>
        <NavLink to="/" exact className="flex items-center">
          <FolderIcon className="h-6 w-6" />
          Project
        </NavLink>
        <NavLink to="/" exact className="flex items-center">
          <UserIcon className="h-6 w-6" />
          Teams
        </NavLink>
        <NavLink to="/" exact className="flex items-center">
          <ClipboardIcon className="h-6 w-6" />
          Report
        </NavLink>
        <NavLink to="/" exact className="flex items-center">
          <CalendarIcon className="h-6 w-6" />
          Task Lists
        </NavLink>
        <NavLink to="/" exact className="flex items-center">
          <CogIcon className="h-6 w-6" />
          Settings
        </NavLink>
      </div>
    </div>
  );
}
