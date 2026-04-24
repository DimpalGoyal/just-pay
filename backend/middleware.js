const dotenv = require("dotenv");
const jwt = require('jsonwebtoken')

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (
    !authHeader ||
    typeof authHeader !== "string" ||
    !authHeader.startsWith("Bearer ")
  ) {
    return res.status(403).json({ msg: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtSecret);

    if (decoded.userId) {
      req.userId = decoded.userId;
      next();
    } else {
      res.status(403).json({msg: "error at try decoding"});
    }
  } catch (err) {
    return res.status(403).json({msg: "error at catch decoding"});
  }
};

module.exports = {
  authMiddleware,
};
