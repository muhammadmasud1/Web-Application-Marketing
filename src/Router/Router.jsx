import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../component/ErrorHandle/ErrorPage";
import Home from "../component/Pages/Home";
import Post from "../component/Pages/Post";
import Service from "../component/Pages/Service";
import About from "../component/Pages/About";
import Contact from "../component/Pages/Contact";
import Login from "../component/Pages/Login";
import Register from "../component/Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
              path : '/post',
              element : <Post></Post>
      },
      {
              path : '/service',
              element : <Service></Service>
      },
      {
              path : '/about',
              element : <About></About>
      },
      {
              path : '/contact',
              element : <Contact></Contact>
      },
      {
              path : '/login',
              element : <Login></Login>
      },
      {
              path : '/register',
              element : <Register></Register>
      }
    ],
  },
]);
export default router