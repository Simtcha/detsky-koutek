import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { CentersPage } from './pages/CentersPage/CentersPage';
import { CenterDetail } from './pages/CenterDetail/CenterDetail';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import './global.css';

import 'bootstrap/dist/css/bootstrap.min.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/about', 
        element: <About /> 
      },
      { path: '/contact',
        element: <Contact /> 
      },
      {
        path: '/pobocky',
        element: <CentersPage />,
        children: [
          {
            path: '/pobocky/:centerId',
            element: <CenterDetail />,
          },
        ],
      },
    ],
  },
])

createRoot(document.querySelector('#app')).render(<RouterProvider router={router} />)
