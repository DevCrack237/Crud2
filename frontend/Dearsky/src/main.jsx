import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import AddPage from './AddPage.jsx'
import EditPage from './EditPage.jsx'
import NotFound from './NotFound.jsx'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

const rooter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: '/add',
    element: <AddPage />,
    errorElement: <NotFound />
  }, {
    path: '/edit/:id',
    element: <EditPage />,
    errorElement: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rooter} />
    <ToastContainer position={'top-center'} theme={'colored'} />
  </React.StrictMode>,
)
