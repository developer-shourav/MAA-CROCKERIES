import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main> </Main>,
      children:[
        {
          path:'/',
          element:<Home> </Home>,
        },

        {
          path:'/home',
          element:<Home> </Home>,
        },

        {
          path:'/products',
          element:<Products></Products>,
        },

        {
          path:'/login',
          element:<Login> </Login>,
        },

        {
          path:'/register',
          element:<Register></Register>,
        }
      ]
    },
  ]);


  export default router;