import Logo from "../images/logo.svg";
import Ilaix from "../images/ilaix.png";

export default function Navbar({ toggleSideBar }) {
  return (
    <nav className="navbar fixed w-full z-20">
      <div className="container-2xl bg-white flex justify-between px-4 md:px-10 py-2 items-center">
        <button
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
        </button>
        <div className="logo">
          <img
            src={Logo}
            alt="gadjian logo"
            className="max-h-10 md:max-h-full"
          />
        </div>
        <div className="nav-profile flex items-center">
          <h5 className="font-semibold hidden md:block">
            Hallo, <span className="text-teal">Ilaix Moriba</span>
          </h5>
          <img
            src={Ilaix}
            alt="profile"
            className="rounded-full h-10 w-10 ml-5"
          />
        </div>
      </div>
    </nav>
  );
}
