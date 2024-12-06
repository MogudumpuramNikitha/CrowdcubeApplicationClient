import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi"; // Import icons
import { AppContext } from "../../Context/ContextProvider";
import { Typewriter } from "react-simple-typewriter";

const NavBar = () => {
  const { user, logoutUser, theme, toggleTheme } = useContext(AppContext);
  const [showDropdown, setShowDropdown] = useState(false);

  // Log out the user
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        toast.error("Failed to log out. Please try again.");
      });
  };

  // Apply the theme class to the root element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const navRouter = (
    <>
      <li>
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
      </li>
      <li>
        <Link to="/campaigns" className="hover:text-gray-100">
          All Campaign
        </Link>
      </li>
      <li>
        <Link to="/addCampaign" className="hover:text-gray-100">
          Add New Campaign
        </Link>
      </li>
      <li>
        <Link to="/myCampaign" className="hover:text-gray-100">
          My Campaign
        </Link>
      </li>
      <li>
        <Link to="/myDonations" className="hover:text-gray-100">
          My Donations
        </Link>
      </li>
    </>
  );

  const userInfo = (
    <>
      <div className="flex items-center space-x-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <FiMoon className="text-gray-800" size={20} />
          ) : (
            <FiSun className="text-yellow-400" size={20} />
          )}
        </button>

        {!user ? (
          <>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-300">
              Register
            </Link>
          </>
        ) : (
          <>
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="cursor-pointer relative"
            >
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
                title={user?.displayName}
              />
            </div>
          </>
        )}

        {/* Dropdown */}
        {showDropdown && user && (
          <div className="absolute z-[100] right-10 top-[2.7rem] mt-2 w-40 bg-gray-400 text-white border rounded-lg shadow-lg">
            <h3 className="font-extrabold w-full text-left px-4 py-2">
              {user?.displayName}
            </h3>
            <button
              onClick={handleLogout}
              className="font-extrabold w-full text-left px-4 py-2 hover:bg-black"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-10 dark:bg-gray-900">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          {/* small device  */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow dark:bg-gray-500"
          >
            {navRouter}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-sm md:text-xl">
          <Typewriter
            words={[
              "Welcome to Crowdcube Application!",
              "Donate Now!",
              "Help a Cause!",
            ]}
            loop={true}
            cursor
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navRouter}</ul>
      </div>
      <div className="navbar-end">{userInfo}</div>
    </div>
  );
};

export default NavBar;
