import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Auth from "./components/pages/auth/auth";
import VerifyMail from "./components/pages/auth/VerifyMail";
import  Page404  from "./components/pages/error/Page404";
import Home from "./components/pages/home/home";
import { IsAuth } from "./middlewares";

function App() {
    // window.addEventListener('beforeunload', (event) => {
    //     event.preventDefault();
    //     event.returnValue = '';
    //   });
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<IsAuth ><Auth formName="login" /></IsAuth>} />
        <Route exact path="/register" element={<IsAuth ><Auth formName="register" /></IsAuth >} />
        <Route exact path="/forgot-password" element={<IsAuth ><Auth formName="forgot-password" /></IsAuth>} />
        <Route exact path="/verifyMail" element={<VerifyMail />} />
        <Route exact path="/" element={<Home />} />
        
        <Route path='*' element={<Page404 />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
