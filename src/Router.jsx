import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Shop from "./Shop";
import Product from "./Product";
import CartContext from "./CartContext";
import { useState } from "react";
import Header from "./Header";
import Cart from "./Cart";

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
    {
      path: "cart",
      element: <Cart />,
    },
  ]);

  const [cart, setCart] = useState({})

  return (
  <CartContext.Provider value={{cart, setCart}}>
    {/* <Header /> */}
    <RouterProvider router={router} />
  </CartContext.Provider>
  );
};

export default Router;