import { css, StyleSheet } from "aphrodite";
import { HiBeaker } from "react-icons/hi2";
import { Link as RouterLink } from "react-router-dom";
import "./utils.css";
export const Link = ({ href = "", children }) => {
  return (
    <RouterLink
      to={href}
      className={
        "transition-all duration-300 text-sm text-indigo-600 hover:text-indigo-700"
      }
    >
      {children}
    </RouterLink>
  );
};

export const Container = ({ children, className }) => {
  return (
    <div
      className={`mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[860px] px-4 lg:p-0 sm:max-w-[520px] w-full${className ? " " + className : ""
        }`}
    >
      {children}
    </div>
  );
};

const styles = StyleSheet.create({
  fadeInDown: {
    animationName: {
      from: {
        opacity: 0,
        transform: "translate3d(0, -20px, 0)",
      },
      to: {
        opacity: 1,
        transform: "none",
      },
    },
    animationDuration: "0.5s",
  },
});

export const PageAnimation = (props) => {
  return (
    <div id="top-page" className={css(styles.fadeInDown)}>
      {props.children}
    </div>
  );
};

export const LogoLink = ({ url = "/" }) => {
  return (
    <Link to={url} className="flex items-center space-x-3">
      <HiBeaker className="w-9 h-9 md:w-12 md:h-12 text-indigo-600" />
      <div>
        <p className="inline text-xl md:text-2xl uppercase font-bold leading-[0.5rem]">
          Atom<span className="font-[300]">Pay</span>
        </p>
        <div className="flex items-center space-x-0.5 leading-[0.5rem]">
          <span className="text-[0.62rem] font-bold text-indigo-600 uppercase leading-[0.5rem]">
            React
          </span>
          <hr className="w-5 border-sky-600" />
        </div>
      </div>
    </Link>
  );
};

export const PageTitle = ({ children }) => {
  return <h3 className="text-2xl mb-3 text-gray-700">{children}</h3>;
};

export const Loader = ({ size = null, color = null, className = "" }) => {
  let newSize = "h-5 w-5";
  let newColor = "text-white";

  switch (color) {
    case "yellow":
      newColor = "text-yellow-500";
      break;
    case "orange":
      newColor = "text-orange-500";
      break;
    case "green":
      newColor = "text-green-500";
      break;
    case "blue":
      newColor = "text-blue-500";
      break;
    case "indigo":
      newColor = "text-indigo-500";
      break;
    case "pink":
      newColor = "text-pink-500";
      break;
    case "purple":
      newColor = "text-purple-500";
      break;
    case "red":
      newColor = "text-red-500";
      break;
    case "black":
      newColor = "text-gray-700";
      break;
    case "white":
      newColor = "text-white";
      break;
    default:
      newColor = "text-gray-700";
      break;
  }

  switch (size) {
    case "sm":
      newSize = "h-4 w-4";
      break;
    case "md":
      newSize = "h-5 w-5";
      break;
    case "lg":
      newSize = "h-8 w-8";
      break;
    case "xl":
      newSize = "h-10 w-10";
      break;
    case "2xl":
      newSize = "h-12 w-12";
      break;
    case "3xl":
      newSize = "h-16 w-16";
      break;
    default:
      break;
  }

  return (
    <svg
      className={`animate-spin ${newColor} ${newSize} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export const SwetcherDarkLightMode = () => {
  const HandleChange = (e) => {
    e.target.checked
      ? document.getElementsByTagName("body")[0].classList.add("dark")
      : document.getElementsByTagName("body")[0].classList.remove("dark");
  };

  return (
    <label className="switch">
      <span className="sun">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g fill="#ffd43b">
            <circle r="5" cy="12" cx="12"></circle>
            <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
          </g>
        </svg>
      </span>
      <span className="moon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
        </svg>
      </span>
      <input type="checkbox" onChange={HandleChange} className="input" />
      <span className="slider"></span>
    </label>
  );
};

export const LoaderPage = () => {
  return (
    <div id="preloader" className="fixed bg-white left-0 top-0 z-99999 h-screen flex items-center justify-center w-screen ">
      <div className="loader">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
      </div>
    </div>
    // <div id="preloader" class="fixed left-0 top-0 z-999999 h-screen flex items-center justify-center w-screen ">
    //   <div className="loader">
    //     <div className="box1"></div>
    //     <div className="box2"></div>
    //     <div className="box3"></div>
    //   </div>
    // </div>
  );
};
