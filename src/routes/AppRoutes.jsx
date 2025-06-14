import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Loader from "../utils/Loader";
import Root from "../Root/Root";
import SinglePage from "../pages/SinglePage";
import Login from "../pages/login/Login";
import AuthProvider from "../provider/AuthProvider";
import Registration from "../pages/Registration/Registration";
import AuthLayout from "../layouts/AuthLayout";
import SubScription from "../pages/subScription/SubScription";
import SubScriptionLayout from "../layouts/SubScriptionLayout";
import CheckOut from "../pages/checkout/CheckOut";
import UserProfile from "../pages/ProfilePage";
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
  },
  {
    path:'auth',
    element:<AuthLayout></AuthLayout>, 
    children: [
      {
        path: '/auth/login',
        element: <Login/>
      },
      {
        path: '/auth/registraion',
        element: <Registration/>
      }
    ]
  }, 
  {
    path: 'pricing',
    element: <SubScriptionLayout />,
    children: [
      {
        path: 'pricing-plan',
        element: <SubScription/>,
        loader: Loader('/dataset/pricing.json'),
      },
      {
        path: '/pricing/checkout',
        element: <CheckOut></CheckOut>
      }
    ]
  },
  {
        path: '/profile',
        element: <UserProfile></UserProfile>
      }
])
export default router;