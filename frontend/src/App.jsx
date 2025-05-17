import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Register from "./pages/Register";
import Single from './pages/Single'
import Home from './pages/Home'
import Write from './pages/Write'
import Login from "./pages/Login"

const router  = createBrowserRouter([
  {
    path:"/",
    element:<div>Hello World</div>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/Write",
    element:<Write/>
  },
  {
    path:"/single ",
    element:<Single/>
  }
])
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
