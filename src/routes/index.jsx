import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Landing2 from "../pages/Landing2/Landing2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/landing",
    element: <Landing2 />,
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
