import { useState } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { confirmAlert } from "../helpers/toast";
import { PageAnimation } from "../utils/utils";

export const Input = ({
  id = "",
  type = "text",
  label = "",
  required = true,
  placeholder = "",
  value = "",
  disabled = false,
  error = [],
  onChange = () => {},
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <label
        htmlFor={id}
        className="dark:text-white text-sm text-gray-700 font-semibold"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="dark:text-gray-700 text-gray-700 relative">
        <input
          id={id}
          type={type === "password" ? (show ? "text" : "password") : type}
          className={`transition-all duration-300 ${
            disabled ? "bg-gray-100" : ""
          } mt-2 py-2.5 px-4 w-full ${
            error.length
              ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20"
          } rounded-md text-sm placeholder-gray-400 focus:ring ${
            type === "password" ? " pr-10" : ""
          }`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />

        {type === "password" && (
          <>
            {show ? (
              <HiEye
                onClick={() => setShow(!show)}
                className="cursor-pointer right-3 top-[1.2rem] text-gray-300 h-5 w-5 absolute"
              />
            ) : (
              <HiEyeSlash
                onClick={() => setShow(!show)}
                className="cursor-pointer right-3 top-[1.2rem] text-gray-300 h-5 w-5 absolute"
              />
            )}
          </>
        )}

        {error.map((item, index) => (
          <p key={index} className="text-red-400 text-sm mt-0.5">
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export const Checkbox = ({
  id = "",
  label = "",
  terms_and_conditions = false,
  setAgreetermsAndConditions,
  agreetermsAndConditions,
}) => {
  return (
    <>
      {terms_and_conditions && (
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModalScrollable"
          tabIndex="-1"
          aria-labelledby="exampleModalScrollableLabel"
          aria-hidden="true"
        >
          <div className=" modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
            <div className=" modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="bg-slate-100  modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalScrollableLabel"
                >
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="bg-slate-100 dark:text-gray-800 modal-body relative p-4">
                <p>
                  This is some placeholder content to show the scrolling
                  behavior for modals. We use repeated line br/eaks to
                  demonstrate how content can exceed minimum inner height,
                  thereby showing inner scrolling. When content becomes longer
                  than the predefined max-height of modal, content will be
                  cropped and scrollable within the modal.
                </p>
                <p>
                  This content should appear at the bottom after you scroll.
                </p>
              </div>
              <div className="bg-slate-100  modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                  onClick={() => setAgreetermsAndConditions(false)}
                >
                  Decline
                </button>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  data-bs-dismiss="modal"
                  onClick={() => setAgreetermsAndConditions(true)}
                >
                  I accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <label
        htmlFor={id}
        className=" text-gray-700 space-x-2 inline-block mr-2"
      >
        {terms_and_conditions ? (
          <input
            id={id}
            readOnly 
            checked={agreetermsAndConditions}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
            type="checkbox"
          />
        ) : (
          <input
            id={id}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
            type="checkbox"
          />
        )}

        {!terms_and_conditions ? (
          <span className="text-sm cursor-pointer">{label}</span>
        ) : (
          <span className="dark:text-white text-gray-700 text-sm cursor-pointer">
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalScrollable"
            >
              terms and conditions
            </a>
            .
          </span>
        )}
      </label>
    </>
  );
};
