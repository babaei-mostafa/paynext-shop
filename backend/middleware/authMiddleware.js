import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";
import ErrorResponse from "../lib/errorResponse.js";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new ErrorResponse("Not authorized to access this route, no token", 401),
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.userId);

    next();
  } catch (error) {
    return next(
      new ErrorResponse(
        "Not authorized to access this route, token failed",
        401,
      ),
    );
  }
});

export const admin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    return next(new ErrorResponse("Not authorized as admin", 403));
  }
};
