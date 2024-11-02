
import  React from "react";
import  ReactDOM from "react-dom/client";
import {createBrowserRouter,  RouterProvider,} from "react-router-dom";

import App from "./App";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Errorpage from "./component/Errorpage";
import Product from "./component/product/Product";
import Contact from "./component/contact/Contact";
import Signin from "./component/signIn/Signin";
import Userprofile from "./component/profile/Userprofile";

//kono API ke sohoje call korte pari:loader er sahajje


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,//main element er nicheii error element ta hobe
    errorElement:<Errorpage></Errorpage>,
    children:[//children ta diteii hobe na dile linke click korle navbar ta chole jabe,,,


      {
        path:"/home",//akaen slash/ na dileoo cholbe
      
        element:<Home></Home>
      },
      {
        path:"/about",
        //loader:()=>fetch('https://dummyjson.com/products'),//api link bosie dilam
        //ABOUT app e amra ai API TA NIE KAJ korbo

        element:<About></About>
      },
      {
      path:"/product",
      element:<Product></Product>


      },

      {
   path:"/contact",
   element:<Contact></Contact>

      },
    {
 path:"/signin",
 element:<Signin></Signin>

    },
    {
      path:"/userprofile",
      element:<Userprofile></Userprofile>
    }
    ]
  },









]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
