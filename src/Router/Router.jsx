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
import Featurepost from "../component/Pages/Featurepost";
import PostDetails from "../component/Pages/PostDetails";
import Dashboard from "../Root/Dashboard/Dashboard";

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
      },
      {
              path : '/register',
              element : <Featurepost></Featurepost>
      }
      ,
      {
            path : '/postDetails/:id',
            element : <PostDetails></PostDetails>
      }
    ],
  },

  /* =============create dashboard tamplate and configuration =================*/
    {
        path : 'dashboard',
        element : <Dashboard></Dashboard>
    }
]);
export default router