import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

const router = createBrowserRouter([
              { 
                            path : '/',
                            element : <Root></Root>,
                            errorElement : <h1>this page error</h1>
              }
])
export default router