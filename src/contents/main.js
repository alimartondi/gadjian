import React, { useEffect, useState } from "react";

export default function Main({ active }) {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?page=3&results=10&seed=abc")
      .then((response) => response.json())
      .then((randomUsers) => setGetData(randomUsers.results));
  }, []);

  return (
    <div className="main">
      <div className="container-2xl flex pt-12 md:pt-16 ">
        <div
          className={`h-screen w-full bg-white lg:left-0 pt-5 lg:pt-10 fixed lg:relative  lg:w-4/12 xl:w-1/5 2xl:w-72 duration-300 ${
            active ? "left-0" : "-left-full opacity-50"
          } `}
        >
          <hr className="mb-4 -mt-2 md:hidden" />
          <ul className="pl-3 md:pl-10 flex flex-col justify-between h-28 fixed">
            <li className="font-semibold flex">
              <a href="/" className="flex">
                <div className="side-menu__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div className="side-menu__title ml-3">Dashboard</div>
              </a>
            </li>
            <li className="font-semibold flex">
              <a href="/" className="flex">
                <div className="side-menu__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <div className="side-menu__title ml-3">Personnel List</div>
              </a>
            </li>
            <li className="font-semibold flex">
              <a href="/" className="flex">
                <div className="side-menu__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="side-menu__title ml-3">Daily Attendance</div>
              </a>
            </li>
          </ul>
        </div>

        <div className="content block w-full p-8 bg-gray-100">
          <div className="top-bar bg-white p-4 block md:flex md:justify-between">
            <div>
              <h1 className="text-2xl font-bold uppercase text-left text-teal">
                Personnel List
              </h1>
              <h3 className="mb-3 text-left font-semibold text-gray-500">
                List of All Personnels
              </h3>
            </div>
            <div className="block md:flex md:items-center ">
              <form action="search" method="GET">
                <div className="py-2 px-4 border bg-white focus:outline-none focus-within:text-gray-400 text-gray-500 align-middle flex">
                  <span className="items-center pt-1 text-teal font-semibold">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Find Personnels"
                    className="text-gray-500 focus:text-gray-500 bg-white focus:outline-none focus:bg-white focus:text-gray-900 font-semibold"
                  />
                </div>
              </form>
              <button className="flex justify-evenly bg-teal px-4 py-2 w-full md:w-auto text-white font-semibold focus:outline-none hover:bg-teal-light duration-300 uppercase md:ml-2 mt-2 md:mt-0">
                Add Personnels
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>

          <section className="block md:flex md:flex-wrap md:justify-between">
            {getData.map((content, i) => (
              <div
                className="personnels-card w-full md:w-60 bg-white rounded-xl mt-5 p-4"
                key={i}
              >
                <div className="flex justify-between items-center text-gray-500">
                  <h3 className="text-left mb-1 font-semibold">
                    Personnel ID:{" "}
                    <span className="text-teal">{content.id.value}</span>
                  </h3>
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
                      strokeWidth="3"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </div>
                <hr className="w-full" />

                <div className="flex md:block text-left mt-3 items-center">
                  <img
                    src={content.picture.large}
                    alt="personnel-profile"
                    className="rounded-full h-24 w-24 md:mx-auto md:h-32 md:w-32 md:mb-5"
                  />
                  <div className="ml-3 font-medium text-base">
                    <h5 className="text-gray-800">Name</h5>
                    <h5 className="text-gray-500">
                      {(content.name.first, content.name.last)}
                    </h5>
                    <h5 className="text-gray-800">Telephone</h5>
                    <h5 className="text-gray-500">{content.phone}</h5>
                    <h5 className="text-gray-800 hidden md:block">Birthday</h5>
                    <h5 className="text-gray-500 hidden md:block">
                      {content.dob.date}
                    </h5>
                    <h5 className="text-gray-800 hidden md:block">Email</h5>
                    <h5 className="text-gray-500 hidden md:block">
                      {content.email}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
