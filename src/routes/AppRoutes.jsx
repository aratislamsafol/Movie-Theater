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
import CheckOut from "../pages/checkout/CheckOut";
import UserProfile from "../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import BreadcrumbLayout from "../layouts/BreadcrumbLayout";
import ViewAll from "../pages/ViewAll/ViewAll";
import WishList from "../pages/WishList";
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
      },
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
    element: <BreadcrumbLayout />,
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
    element: <ProtectedRoute><UserProfile /></ProtectedRoute>,
    loader: Loader('/dataset/movies.json','/dataset/tvseris.json')
  }, 
  {
    path:'movies',
    element: <BreadcrumbLayout></BreadcrumbLayout>,
    children: [
      {
        index: true,
        element: <ViewAll></ViewAll>, 
        loader: Loader('/dataset/movies.json')
      }
    ]
  },
  {
    path:'wishlist',
    element: <BreadcrumbLayout></BreadcrumbLayout>,
    children: [
      {
        index: true,
        element: <ProtectedRoute><WishList /></ProtectedRoute>, 
        loader: Loader('/dataset/movies.json')
      }
    ]
  }

])
export default router;