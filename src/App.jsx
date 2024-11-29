import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path: "*",
    element : (
      <h1>404 Error Page Not Found</h1>
    )
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App