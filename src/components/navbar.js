// import Logo from "../images/logo.svg";
import Ilaix from "../images/ilaix.png";
import { ChatIcon, BellIcon } from "@heroicons/react/outline";

export default function Navbar({ toggleSideBar }) {
  return (
    <nav className="flex max-w-full justify-between sticky top-0  items-center bg-gray-50 border-b py-6">
      {/* <button
        className="focus:outline-none block lg:hidden"
        onClick={toggleSideBar}
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
      </button> */}
      {/* <div className="font-medium">Dashboard</div> */}
      <div className="nav-profile flex items-center justify-between">
        <span className="bg-white flex rounded-lg">
          <input
            type="text"
            placeholder="search"
            className="py-2 rounded-lg px-4 focus:outline-none text-gray-700 w-20"
          />
        </span>
        <span className="text-gray-500 flex w-24 justify-between items-center">
          <ChatIcon className="h-6 w-6 cursor-pointer" />
          <BellIcon className="h-6 w-6 cursor-pointer" />
          <img src={Ilaix} alt="profile" className="rounded-full h-8 w-8" />
        </span>
      </div>
      {/* </div> */}
    </nav>
  );
}
