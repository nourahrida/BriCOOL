import { Link as RouterLink } from "react-router-dom";
import { LoaderPage, SwetcherDarkLightMode } from "../utils/utils";
import decode from "jwt-decode";

import { useEffect, useState } from 'react';

const NavBar = ({ socket }) => {
  const [notif, setNotif] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(localStorage.getItem("profile") && decode(localStorage.getItem("profile")))
  }, [])

  useEffect(() => {
    !socket._callbacks?.$notif && socket?.on("notif", data => {
      console.log(data);
    });
    // console.log(socket._callbacks);
  }, [socket]);

  const handleClick = () => {
    socket.emit("SendMessage", { userId: userData.id, to: userData.id, message : "lets go baby hahaha" });
  };
  // const handleClick2 = () => {
  //   socket.emit("SendMessage", { userId: userData.id, to: '646e9c87fa78a88c7721ffdc' });
  // };

  return (
    <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <RouterLink to="/" className="flex items-center">
          <img src="images/logo.png" className="h-8 mr-3" alt="GigSource Logo" ></img>
          <span className="self-center hidden sm:block text-2xl text-gray-800 font-semibold whitespace-nowrap dark:text-white">GigSource</span>
        </RouterLink>
        <div className="flex items-center md:order-2">
          {!(userData?.verifiedEmail && userData?.islogin) ? <>
            <div>
              <RouterLink to="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</RouterLink>
              <RouterLink to="/register" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</RouterLink>
            </div>
          </> :
            <>
              <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="images/auth-1.jpeg" alt="user photo"></img>
              </button>
            </>
          }

          {/* <SwetcherDarkLightMode /> */}

          <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white" >Bonnie Green</span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <RouterLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</RouterLink>
              </li>
              <li>
                <RouterLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</RouterLink>
              </li>
              <li>
                <RouterLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</RouterLink>
              </li>
              <li>
                <RouterLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</RouterLink>
              </li>
            </ul>
          </div>
          <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
          <ul className="flex  flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-100  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <RouterLink to="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</RouterLink>
            </li>
            <li>
              <RouterLink to="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</RouterLink>
            </li>
            <li>
              <RouterLink to="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</RouterLink>
            </li>
            <li>
              <RouterLink to="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</RouterLink>
            </li>

          </ul>
        </div>
      </div>
      <button onClick={handleClick} >test</button>
    </nav>

  );
}
export default NavBar;