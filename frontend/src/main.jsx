import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx';
import Demo from './components/Demo.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AfterLogHome from './pages/AfterLogHome.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Connecting from './components/Connecting.jsx';
import ConnectingPage from './pages/ConnectingPage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import GrowPage from './pages/GrowPage.jsx';
import MySpacePage from './pages/MySpacePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },  
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/demo",
    element: <Demo/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/afterLogin",
    element: <AfterLogHome/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/connecting",
    element: <ConnectingPage/>,
  },
  {
    path: "/create",
    element: <CreatePage/>,
  },
  {
    path: "/grow",
    element: <GrowPage/>,
  },
  {
    path: "/myspace",
    element: <MySpacePage/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


      <RouterProvider router={router} />

  </React.StrictMode>,
)
