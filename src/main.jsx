import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,} from "react-router";
import router from './routes/AppRoutes';
import OfCanvasProvider from './provider/OfCanvasProvider';
import AuthProvider from './provider/AuthProvider';
import ScrollToTop from './components/ScrollTop/ScrollTop';
import Loading from './pages/Loading';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <OfCanvasProvider>
        <RouterProvider router={router} fallbackElement={<Loading />}/>
         <ScrollToTop/>
      </OfCanvasProvider>
    </AuthProvider>
  </StrictMode>
)
