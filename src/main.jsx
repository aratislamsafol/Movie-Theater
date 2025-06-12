import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,} from "react-router";
import router from './routes/AppRoutes';
import OfCanvasProvider from './provider/OfCanvasProvider';
import AuthProvider from './provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <OfCanvasProvider>
        <RouterProvider router={router} fallbackElement={<div>Loading...</div>}/>
      </OfCanvasProvider>
    </AuthProvider>
  </StrictMode>,
)
