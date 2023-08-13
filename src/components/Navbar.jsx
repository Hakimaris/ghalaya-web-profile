import React, { useState } from "react";
import Dropdownlang from "./Dropdownlang";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <svg
          width="50"
          height="48"
          viewBox="0 0 250 202"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Vector">
            <path
              d="M45.5 10.6043L0 109.104H86.5C90.1 109.104 94 103.771 95.5 101.104C107.5 71.6043 132.2 11.6043 135 7.60431C137.8 3.60431 141.5 1.60431 143 1.1043C117.333 0.27097 64.4 -0.895697 58 1.1043C51.6 3.1043 47 8.27097 45.5 10.6043Z"
              fill="#26CAFB"
            />
            <path
              d="M150.5 10.3834L104.5 109.883L62 200.383C87.1667 201.883 139.5 203.683 147.5 198.883C155.5 194.083 161.167 186.217 163 182.883L199 103.383C211.833 72.3834 238 9.68344 240 6.88344C242 4.08343 247.167 1.71677 249.5 0.883443C223.5 0.216776 170 -0.716557 164 0.883443C158 2.48344 152.5 7.88344 150.5 10.3834Z"
              fill="#FA0006"
            />
          </g>
        </svg>
        <a className="btn btn-ghost normal-case font-bold text-left lg:text-xl">
          PT. Ghalaya <br></br>Abadipersada Line
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-hover normal-case">
          <label tabIndex={0} className="btn m-1">
            Bahasa
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
