import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import 'tw-elements';
import 'flowbite';
import "./index.css";
import "./bootstrap";
// import { ThemeProvider } from "@material-tailwind/react";

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         {/* <ThemeProvider> */}
//             <App />
//         {/* </ThemeProvider> */}
//     </React.StrictMode>
// )

