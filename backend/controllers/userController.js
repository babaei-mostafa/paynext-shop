import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/asyncHandler.js";
import ErrorResponse from "../lib/errorResponse.js";
import User from "../models/userModel.js";
import sendTokenResponse from "../lib/sendTokenResponse.js";

// @desc   Login user & get token
// @route  POST /api/users/login
// @access Public
export const loginUser = asyncHandler(async (req, res, next) => {
  let { email, password } = req.body || {};

  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  if (typeof email === "string") {
    email = email.toLowerCase().trim();
  } else {
    email = "";
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  return sendTokenResponse(user, 200, res, "Logged in successfully");
});

// @desc   Resister user
// @route  POST /api/users
// @access Public
export const registerUser = asyncHandler(async (req, res, next) => {
  let { name, email, password } = req.body || {};

  if (email) {
    email = email.toLowerCase().trim();
  }

  const existing = await User.findOne({ email });

  if (existing) {
    return next(new ErrorResponse("Email already exists", 400));
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    return sendTokenResponse(user, 201, res, "User registered successfully");
  } else {
    return next(new Error("Invalid user data", 400));
  }
});

// @desc   Logout user
// @route  POST /api/users/logout
// @access Private
export const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
});

// @desc   Get user profile
// @route  GET /api/users/profile
// @access Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById({ _id: req.user._id });
  if (user) {
    res.json(user);
  } else {
    next(new ErrorResponse("User not found", 404));
  }
});

// @desc   Update user profile
// @route  PUT /api/users/profile
// @access Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById({ _id: req.user._id });

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } else {
    return next(new ErrorResponse("User not found", 404));
  }
});

// @desc   Get users
// @route  GET /api/users
// @access Private/Admin
export const getUsers = asyncHandler(async (req, res) => {
  res.send("Get users");
});

// @desc   Get user by ID
// @route  GET /api/users/:id
// @access Private/Admin
export const getUserById = asyncHandler(async (req, res) => {
  res.send("Get user by ID");
});

// @desc   Delete user
// @route  DELETE /api/users/:id
// @access Private/Admin
export const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete user");
});

// @desc   Update user
// @route  PUT /api/users/:id
// @access Private/Admin
export const updateUser = asyncHandler(async (req, res) => {
  res.send("Update user");
});
