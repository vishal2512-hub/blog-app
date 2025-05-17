import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/register/Register";
import Single from "./pages/Single/Single";
import Home from "./pages/Home/Home";
import Write from "./pages/Write";
import Login from "./pages/Login/Login";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import "./style.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
         element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
