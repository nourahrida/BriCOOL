import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/pages/auth/auth";
import React, { Suspense } from 'react';
import { IsAuth } from "./middlewares";
import { loginPage, registerPage, forgotPassword, verifyMail, resetPassword, homePage ,LazyHomePage,LazyPage404} from "./components/utils/pagesLinks";
import { LoaderPage } from "./components/utils/utils";

function App() {
  // window.addEventListener('beforeunload', (event) => {
  //     event.preventDefault();
  //     event.returnValue = '';
  //   });
  return (
    <BrowserRouter>
     <Suspense fallback={<LoaderPage />}>
      <Routes>
        <Route exact path={loginPage} element={<IsAuth ><Auth formName="login" /></IsAuth>} />
        <Route exact path={registerPage} element={<IsAuth ><Auth formName="register" /></IsAuth >} />
        <Route exact path={forgotPassword} element={<IsAuth ><Auth formName="forgot-password" /></IsAuth>} />
        <Route exact path={verifyMail} element={<IsAuth ><Auth formName="VerifyMail" /></IsAuth>} />
        <Route exact path={resetPassword} element={<IsAuth ><Auth formName="resetPassword" /></IsAuth>} />
        <Route exact path={homePage} element={<LazyHomePage />} />
        \\ page not found 
        <Route path='*' element={<LazyPage404 />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
