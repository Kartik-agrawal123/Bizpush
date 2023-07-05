import React, { useState } from "react";
import chargeImg from "../assests/charger.png";
import userImg from "../assests/men.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <section id="nav">
      <div className="container max-w-6xl mx-auto px-10 py-8">
        {!showMenu && (
          <>
            <div className="flex justify-between">
              <div className="flex flex-row lg:space-x-52 md:space-x-24 items-center">
                {/* <!-- logo --> */}
                <div className="flex space-x-4 items-center">
                  <img src={chargeImg} alt="logo" className="w-8" />
                  <span className="text-xl text-indigo-400 font-semibold">
                    BIZPUSH
                  </span>
                </div>
                <div className="hidden md:flex items-center lg:space-x-12 md:space-x-6">
                  <a
                    href="/"
                    className="text-lg text-grayishViolet font-medium hover:text-black">
                    Home
                  </a>
                  <a
                    href="/"
                    className="text-lg text-grayishViolet font-medium hover:text-black">
                    Gallery
                  </a>
                  <a
                    href="/"
                    className="text-lg text-grayishViolet font-medium hover:text-black">
                    Shop
                  </a>
                  <a
                    href="/"
                    className="text-lg text-grayishViolet font-medium hover:text-black">
                    Contact
                  </a>
                </div>
              </div>
              <div className="hidden md:flex lg:space-x-6 md:space-x-4 items-center">
                {/* search icon */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-search"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#9e9e9e"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                </div>
                {/* cart icon */}
                <div className="flex space-x-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-shopping-cart"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#9e9e9e"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                  </svg>
                  <button className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs">
                    2
                  </button>
                </div>
                {/* user icon */}
                <div className="rounded-full w-10 h-10 border-2 border-black overflow-hidden">
                  <img src={userImg} alt="user" />
                </div>
              </div>
              {/* <!-- hamburger menu --> */}
              <div className="md:hidden" onClick={() => setShowMenu(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#9e9e9e"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l16 0" />
                  <path d="M4 12l16 0" />
                  <path d="M4 18l16 0" />
                </svg>
              </div>
            </div>
          </>
        )}

        {/* <!-- mobile menu --> */}
        {showMenu && (
          <div className="bg-white relative flex-col space-y-6 px-10 py-12 items-center justify-center w-full">
            <div className="flex flex-col space-y-8 items-center justify-center">
              <a
                href="/"
                className="text-xl text-indigo-400 font-medium duration-200 hover:text-grayishViolet">
                Home
              </a>
              <a
                href="/"
                className="text-xl text-indigo-400  font-medium duration-200 hover:text-grayishViolet">
                Gallery
              </a>
              <a
                href="/"
                className="text-xl text-indigo-400  font-medium duration-200 hover:text-grayishViolet">
                Shop
              </a>
              <a
                href="/"
                className="text-xl text-indigo-400  font-medium duration-200 hover:text-grayishViolet">
                Contact
              </a>
            </div>

            <div className="border-t-2 border-gray-400 w-full"></div>
            <a
              href="/"
              className="text-xl text-white font-medium duration-200 hover:text-grayishViolet">
              Login
            </a>
            <button className="rounded-full w-full shadow-lg flex justify-center px-8 text-center font-bold text-white py-3 text-lg bg-customRed hover:opacity-60">
              <div className="flex space-x-1 items-center">
                <span className="text-lg font-bold text-indigo-600 mr-5">
                  Cart
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-shopping-cart"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#9e9e9e"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
                <button className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs">
                  2
                </button>
              </div>
            </button>

            <div
              className="absolute top-1 right-5"
              onClick={() => setShowMenu(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-square-rounded-x"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#9e9e9e"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10l4 4m0 -4l-4 4" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NavBar;
