import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Loader from "../utils/Loader";
import Login from "../pages/login/Login";
import Registration from "../pages/Registration/Registration";
import AuthLayout from "../layouts/AuthLayout";
import SubScription from "../pages/subScription/SubScription";
import CheckOut from "../pages/checkout/CheckOut";
import UserProfile from "../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import ViewAll from "../pages/ViewAll/ViewAll";
import WishList from "../pages/WishList";
import Contact from "../pages/Contact";
import Accordion from "../components/Accordion/Accrodion";
import Loading from "../pages/Loading";
import { lazy, Suspense } from "react";
import About from "../pages/About";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";

const Root = lazy(() => import("../Root/Root"));
const SinglePage = lazy(() => import("../pages/SinglePage"));
const BreadcrumbLayout = lazy(()=> import("../layouts/BreadcrumbLayout"))
const router= createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Root></Root>
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: Loader('/dataset/movies.json','/dataset/tvseris.json')
      }, 
      {
        path: "item/:id",
        element: <Suspense fallback={<Loading />}><SinglePage></SinglePage></Suspense>,
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
    element: <Suspense fallback={<Loading />}><BreadcrumbLayout /></Suspense>,
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
    element: <Suspense fallback={<Loading />}><BreadcrumbLayout /></Suspense>,
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
    element: <Suspense fallback={<Loading />}><BreadcrumbLayout /></Suspense>,
    children: [
      {
        index: true,
        element: <ProtectedRoute><WishList /></ProtectedRoute>, 
        loader: Loader('/dataset/movies.json')
      }
    ]
  },
  {
    path:'contact',
     element: <Suspense fallback={<Loading />}><BreadcrumbLayout /></Suspense>,
     children: [
      {
        index:true,
        element: <Contact></Contact>,
      }
     ]
  },
  {
    path:'faq',
     element: <Suspense fallback={<Loading />}><BreadcrumbLayout /></Suspense>,
     children: [
      {
        index:true,
        element: <Accordion></Accordion>,
      }
     ]
    
  },
  {
    path:'about',
     element: <Suspense fallback={<Loading />}><BreadcrumbLayout /></Suspense>,
     children: [
      {
        index:true,
        element: <About></About>,
      }
     ]
  },
  {
    path:'privacy-policy',
     element: <Suspense fallback={<Loading />}><BreadcrumbLayout /></Suspense>,
     children: [
      {
        index:true,
        element: <PrivacyPolicy></PrivacyPolicy>,
      }
     ]
  },

  {
    path:'terms',
     element: <Suspense fallback={<Loading />}><BreadcrumbLayout /></Suspense>,
     children: [
      {
        index:true,
        element: <TermsCondition />
      }
     ]
  }


])
export default router;