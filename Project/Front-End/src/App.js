import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/pages/auth/auth";
import Home from "./components/pages/home/home";

function App() {
    // window.addEventListener('beforeunload', (event) => {
    //     event.preventDefault();
    //     event.returnValue = '';
    //   });
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Auth formName="login" />} />
        <Route exact path="/" element={<Auth formName="login" />} />
        <Route exact path="/register" element={<Auth formName="register" />} />
        <Route exact path="/forgot-password" element={<Auth formName="forgot-password" />} />
        <Route exact path="/home" element={<Home />} />
        {/* <Route path='*' element={}/> page not found*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
