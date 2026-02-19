import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import store from "./store";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </StrictMode>,
);
