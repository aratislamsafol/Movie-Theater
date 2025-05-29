import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Loader from "../utils/Loader";
const router= createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: Loader('/dataset/movies.json','/dataset/tvseris.json')
  }
])
export default router;