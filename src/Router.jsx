import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Shop from "./Shop";
import Product from "./Product";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
        path: "shop",
        element: <Shop />
    },
    {
        path: "product/:id",
        element: <Product />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;