import Dashboard from "../pages/Dashboard";
import DeleteOrder from "../pages/Orders/DeleteOrder";
import DetailOrder from "../pages/Orders/DetailOrder";
import Orders from "../pages/Orders/Orders";
import CreateProduct from "../pages/Products/CreateProduct";
import DeleteProduct from "../pages/Products/DeleteProduct";
import EditProduct from "../pages/Products/EditProduct";
import ProductDetail from "../pages/Products/ProductDetail";
import Products from "../pages/Products/Products";
import Help from "../pages/Help"; 

import {
    DASHBOARD,
    PRODUCTS,
    PRODUCT_CREATE,
    PRODUCT_DELETE,
    PRODUCT_DETAIL,
    PRODUCT_UPDATE,
    ORDERS,
    ORDER_DETAIL,
    ORDER_DELETE,
    HELP
} from "./consts";

export const routes = [
    {
        path: DASHBOARD,
        element: Dashboard
    },
    {
        path: PRODUCTS,
        element: Products
    },
    {
        path: PRODUCT_CREATE,
        element: CreateProduct
    },
    {
        path: PRODUCT_DELETE,
        element: DeleteProduct
    },
    {
        path: PRODUCT_DETAIL,
        element: ProductDetail
    },
    {
        path: PRODUCT_UPDATE,
        element: EditProduct
    },
    {
        path: ORDERS,
        element: Orders
    },
    {
        path: ORDER_DELETE,
        element: DeleteOrder
    },
    {
        path: ORDER_DETAIL,
        element: DetailOrder
    },
    {
        path: HELP,  
        element: Help,  
    },
];
