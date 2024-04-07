import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from './ErrorPage';
import About from './routes/About';
import Root, {loader as rootLoader } from './routes/Root';
import Profile, {loader as testLoader} from './routes/Profile';
import Index from './routes/Index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'


const router = createBrowserRouter([
  {
    
    path: "/",
    element: <Root />,
    
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/profile",
        element: <Profile />,
        loader: testLoader
      },
      {
        path: "/about",
        element: <About/>,
        loader: testLoader
      },
    ],
    
  },
]
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>,
)
