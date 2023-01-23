import { useState } from 'react'

import './App.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';



export default function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);

  return(
    <RouterProvider router={router} />
  )
}
