export const APP_NAME = import.meta.env.VITE_APP_NAME || "PayNext Shop";
export const BASE_URL =
  import.meta.env.VITE_NODE_ENV === "development"
    ? "http://localhost:5000"
    : "";
export const PRODUCTS_URL = "/api/products";
export const USERS_URL = "/api/users";
export const ORDERS_URL = "/api/orders";
export const PAYPAL_URL = "/api/config/paypal";
