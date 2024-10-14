import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './Landing.jsx';
import Authentication from './Authentication.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/auth",
    element: <Authentication />
  },
]);


createRoot(document.getElementById('root')).render(
  

  
  <RouterProvider router={router} /> 

    

  )
  
