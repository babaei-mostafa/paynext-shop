import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomeScreen from "../screens/HomeScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [{ index: true, Component: HomeScreen }],
  },
]);
