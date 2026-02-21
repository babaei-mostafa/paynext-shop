// Get token from model, create cookie, and send response
const sendTokenResponse = (user, statusCode, res, message) => {
  const token = user.getSignedJwtToken();
  console.log(token)

  const options = {
    expires: new Date(
      Date.now() +
        Number(process.env.JWT_ACCESS_COOKIE_EXPIRATION) * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }
  res.cookie("jwt", token, options);
  res.status(statusCode).json({ message, user });
};

export default sendTokenResponse;
