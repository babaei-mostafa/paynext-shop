import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import { CLIENT_URLS } from "./lib/constants/index.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

// CORS configuration:
// Allows only approved frontend origins and enables credentials support
const allowedOrigins = CLIENT_URLS ? CLIENT_URLS.split(",") : [];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.bold);
});
