import React, { useState } from "react";

import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <header className="w-full bg-slate-600 h-16 z-10 fixed px-7 ">
      <div className="max-w-screen-2xl flex items-center h-full justify-center mx-auto">
        <nav className="flex items-center gap-7 ">
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-1 px-3  cursor-pointer md:hidden menu-icon"
          >
            {open ? (
              <HiOutlineX fontSize="20px" style={{ zIndex: 100 }} />
            ) : (
              <HiOutlineMenu fontSize="20px" />
            )}
          </div>
          <ul
            className={`md:flex md:flex-row md:items-center bg-slate-600 h-screen md:h-auto absolute md:static gap-8 flex items-center justify-center py-4 flex-col md:mt-0 w-full md:w-auto right-0 transition-all duration-400 ease-in-out ${
              open ? "left-0 top-[60px]" : "right-full top-[60px]"
            } `}
          >
            <NavLink onClick={closeMenu} className="text-white " to="/client">
              Home
            </NavLink>

            <NavLink onClick={closeMenu} to="/client/list">
              List
            </NavLink>
            <NavLink onClick={closeMenu} to="/client/create">
              Create
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
