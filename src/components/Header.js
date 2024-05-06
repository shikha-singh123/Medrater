import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { Navbar, Dropdown, Button } from "react-daisyui";
import ButtonList from "./ButtonList";

// Assuming HAM_URL is defined elsewhere
const HAM_URL = "...";

const Header = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // State to track whether the dropdown menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  };

  return (
    <div className="grid grid-flow-col p-4 w-100  w-full m-auto shadow-lg rounded-2xl bg-red-100">
    <Navbar>
      <Navbar.End>
        <Dropdown>
          <Button tag="label" color="ghost" tabIndex={0} className="lg:hidden" onClick={toggleMenu}>
            <svg xmlns={HAM_URL} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </Button>
          <Dropdown.Menu tabIndex={0} className={`w-52 menu-sm mt-3 z-[1] ${menuOpen ? 'block' : 'hidden'}`}>
            <ul className="menu menu-horizontal px-1">
              <ButtonList />
            </ul>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.End>

      <Navbar.Center>
        <a className="btn btn-ghost normal-case text-2xl font-bold cursor-pointer">Medrater</a>
      </Navbar.Center>

      <div className="flex justify-between items-center mt-4">
        {!auth ? (
          <>
           <Button className="m-2 bg-black text-white hover:bg-slate-800"> <Link to="/signup" className="p-2 text-xl ">Sign In</Link> </Button>
           <Button> <Link to="/login" className="p-2 m-auto">Log In</Link> </Button>
          </>
        ) : (
          <div className="flex items-center">
            <Link onClick={logout} to="/" className="p-2 m-auto">Log Out ({JSON.parse(auth)?.name })</Link>
          </div>
        )}
      </div>

      <div className="mx-auto max-w-screen-lg hidden md:block">
        <ButtonList />
      </div>
    </Navbar>
    </div>
  );
};

export default Header;
