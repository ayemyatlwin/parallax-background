import React from "react";
import "./App.css";
import One from "./Components/One";
import Two from "./Components/Two";
import Three from "./Components/Three";
import Last from "./Components/Last";
import { BiMenuAltRight } from "react-icons/bi";

const App = () => {
  return (
    <div className="screenScroll">
      <nav className="bg-white border-gray-200 fixed ">
        <div className=" w-screen flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Parallax Testing
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            <span class="sr-only">Open main menu</span>
            <BiMenuAltRight className="w-7 h-5" />
          </button>
          <div className="hidden w-full md:block md:w-auto px-4" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#One"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  
                >
                  One
                </a>
              </li>
              <li>
                <a
                  href="#Two"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Two
                </a>
              </li>
              <li>
                <a
                  href="#Three"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Three
                </a>
              </li>
              <li>
                <a
                  href="#Last"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Last
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>{" "}
      <div className="">
        <section className="flex justify-center items-center h-screen bg-green-300   ">
          <div className="" id="One">
            <One />
          </div>
        </section>
        <section className="flex justify-center items-center h-screen bg-green-400   ">
          <div className="" id="Two">
            <Two />
          </div>
        </section>

        <section className="flex justify-center items-center h-screen bg-green-500   ">
          <div className="" id="Three">
            <Three />
          </div>
        </section>

        <section className="flex justify-center items-center h-screen bg-green-600  ">
          <div className="" id="Last">
            <Last />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
