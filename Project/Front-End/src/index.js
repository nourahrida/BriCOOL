import React from "react";
import ReactDOM  from 'react-dom/client';
import App from './App';
import 'tw-elements';
import "./index.css";
import "./bootstrap";
// import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <ThemeProvider> */}
            <App />
        {/* </ThemeProvider> */}
    </React.StrictMode>
)

