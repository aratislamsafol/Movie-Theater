import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Loader from "../utils/Loader";
import Root from "../Root/Root";
import SinglePage from "../pages/SinglePage";
const router= createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<HomeLayout></HomeLayout>,
        loader: Loader('/dataset/movies.json','/dataset/tvseris.json')
      }, 
      {
        path: "item/:id",
        element: <SinglePage></SinglePage>,
        loader: Loader('/dataset/movies.json','/dataset/tvseris.json')
      }
    ]
    
  }
])
export default router;