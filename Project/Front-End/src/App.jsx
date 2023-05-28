import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/pages/auth/auth";
import { Suspense, useEffect, useState } from 'react';
import { IsAuth } from "./middlewares";
import { loginPage, registerPage, forgotPassword, homePage, verifyMail, resetPassword, LazyHomePage, LazyPage404 } from "./components/utils/pagesLinks";
import { LoaderPage } from "./components/utils/utils";
import { io } from "socket.io-client";
import decode from "jwt-decode";
import config from "./configs/config"
const App = () => {
  const [userData, setUserData] = useState({});
  // window.addEventListener('beforeunload', (event) => {
  //     event.preventDefault();
  //     event.returnValue = '';
  //   });
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    setUserData(localStorage.getItem("profile") && decode(localStorage.getItem("profile")))
    // console.log("new socket");
    setSocket(io(config.END_POINT, {
      // query: {
      //   userId: 'UserIdHere' // Set the user id
      // }
    }));
  }, []);

  useEffect(() => {
    userData && socket?.emit("newUser", { userId: userData.id });
  }, [socket, userData])
  return (
    <BrowserRouter>
      <Suspense fallback={<LoaderPage />}>
        <Routes>
          <Route exact path={loginPage} element={<IsAuth ><Auth formName="login" /></IsAuth>} />
          <Route exact path={registerPage} element={<IsAuth ><Auth formName="register" /></IsAuth >} />
          <Route exact path={forgotPassword} element={<IsAuth ><Auth formName="forgot-password" /></IsAuth>} />
          <Route exact path={verifyMail} element={<IsAuth ><Auth formName="VerifyMail" /></IsAuth>} />
          <Route exact path={resetPassword} element={<IsAuth ><Auth formName="resetPassword" /></IsAuth>} />
          <Route exact path={homePage} element={<LazyHomePage socket={socket}/>} />
          \\ page not found
          <Route path='*' element={<LazyPage404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
