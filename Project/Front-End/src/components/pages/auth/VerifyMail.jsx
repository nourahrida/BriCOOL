import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { verifyMail } from "../../../actions/auth";
import { useDispatch } from "react-redux";
import NavBar from "../../controls/navBar";
import Footer from "../../controls/footer";
import { LoaderPage } from "../../utils/utils";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search); // search for get all query from url
}

function VerifyMail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const Query = useQuery();
  const id = Query.get("id");
  console.log(id);
  useEffect(() => {
    if (!id) {
      navigate("/Page404");
      return;
    }
    // message
    //   ? document.getElementById("preloader").classList.add("hidden")
    //   : document.getElementById("preloader").classList.remove("hidden");
  }, [id]);

  id && dispatch(verifyMail(id, setMessage));

  return (
    !message ?
      <LoaderPage />
      :
      <>
        <NavBar />
        <div className="mt-5 flex place-content-center mb-40 ">
          <div className="max-w-sm p-12 place-content-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className=" flex flex-col place-items-center">
              <img className="w-20" src="images/gigsource_verify.png"></img>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Account Activation
              </h5>
            </div>
            <p className="justify-center mb-3 font-normal text-gray-500 dark:text-gray-400">
              {message}
            </p>
            <div className="flex place-content-end">
              <RouterLink
                to="/login"
                className="inline-flex items-center text-blue-600 mt-3 hover:underline place-items-end"
              >
                Go to login
                <svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
              </RouterLink>
            </div>
          </div>
        </div>
        <Footer />
      </>
  );
}

export default VerifyMail;
