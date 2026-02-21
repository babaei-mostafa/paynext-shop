import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProfileScreen from "../screens/ProfileScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomeScreen,
      },
      {
        path: "/product",
        children: [{ path: ":id", Component: ProductScreen }],
      },
      { path: "/profile", component: ProfileScreen },
      {
        path: "/cart",
        Component: CartScreen,
      },
    ],
  },
  { path: "/login", Component: LoginScreen },
  { path: "/register", Component: RegisterScreen },
]);
