import {
  createBrowserRouter,
} from "react-router-dom";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
// import OurClasses from "../Pages/OurClasses/Ourclasses/OurClasses";

// import Dashboard from "../Layout/Dashboard";
// import PrivateRoute from "./PrivateRoute";
// import MyClasses from "../Pages/Myclass/MyClasses";
import OurInstructor from "../Pages/OurInstructor/OurInstructor/OurInstructor";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MySelectedClasses from "../Layout/MySelectedClasses";
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
        path: 'ourinstructor', 
        element: <OurInstructor></OurInstructor>
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
      
    ]
  }
]);