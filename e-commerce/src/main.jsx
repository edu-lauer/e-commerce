import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import ProductDetail from './views/ProductDetail/ProductDetail'
import ShoppingCart from './views/ShoppingCart/ShoppingCart'
import CheckOut from './views/CheckOut/CheckOut'
import { PRODUCTS_MOCK } from './mock/productMock'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home data={ PRODUCTS_MOCK }/>,
  },
  {
    path: "/productdetail/:productId",
    element: <ProductDetail data={ PRODUCTS_MOCK } />,
  },
  {
    path: "/shoppingcart/:shoppingCartId",
    element: <ShoppingCart data={ PRODUCTS_MOCK } />,
  },
  {
    path: "/checkout/:id",
    element: <CheckOut />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
