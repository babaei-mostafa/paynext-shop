import asyncHandler from "../middleware/asyncHandler.js";

// @desc   Login user & get token
// @route  POST /api/users/login
// @access Public
export const loginUser = asyncHandler(async (req, res) => {
  res.send("login user");
});

// @desc   Resister user
// @route  POST /api/users
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc   Logout user
// @route  POST /api/users/logout
// @access Private
export const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc   Get user profile
// @route  GET /api/users/profile
// @access Private
export const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc   Update user profile
// @route  PUT /api/users/profile
// @access Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user profile");
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
