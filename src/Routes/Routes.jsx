import {
  createBrowserRouter,
} from "react-router-dom";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";


import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MySelectedClasses from "../Layout/MySelectedClasses";
import Instructor from "../Pages/Instructors/Instructor";
import NotFoundPage from "../Pages/NotFoundPage";
import AllUsers from "../Layout/AllUsers/AllUsers";
// import MySelectedClasses from "../Layout/MySelectedClasses";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      }, 
      {
        path: 'ourclasses', 
        element: <Classes></Classes>
      },
      {
        path: 'instructor', 
        element: <Instructor></Instructor>
      },
      
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      // {
      //   path: 'secret',
      //   element: <PrivateRoute><Secret></Secret></PrivateRoute>
      // }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,  
    children: [
      {
        path: 'myselectedclasses', 
        element: <MySelectedClasses></MySelectedClasses>
      },
      {
        path: 'allusers', 
        element: <AllUsers></AllUsers>
      },
    ]
  },
  {
    path: 'error',
    element: <NotFoundPage></NotFoundPage>
  }
]);