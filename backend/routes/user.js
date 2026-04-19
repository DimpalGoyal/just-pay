const express = require("express");
const router = express.Router();
const z = require("zod");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const dotenv = require("dotenv");

dotenv.load();
const jwtSecret = env.process.JWT_SECRET;

const signupBody = z.object({
  username: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
});

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    res.status(411).send({ msg: "user exist / invalid inputs" });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    res.status(411).send({ msg: "user exist / invalid inputs" });
  }

  const user = await User.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });

  const userId = user._id;
  const token = jwt.sign({ userId }, jwtSecret);

  res.send({
    message: "user created successfully",
    token: token,
  });
});

module.exports = router;
