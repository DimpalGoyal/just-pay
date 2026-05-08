const express = require("express");
const mongoose = require("mongoose");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  // initiate mongoose session
  const session = await mongoose.startSession()

  session.startTransaction();
  const {amount, to} = req.body;

  const account = await Account.findOne({
    userId: req.userId
  }).session(session);

  // check for sufficiant balance
  if(!account | account.balance < amount){
    await session.abortTransaction();
    return res.status(400).json({
      message: "insufficient balance"
    })
  }

  const toAccount = await Account.findOne({userId: to}).session(session);

  if(!toAccount){
    await session.abortTransaction();
    return res.status(400).json({
      message: "invalid account"
    })
  }

  // perform the transfer
  await Account.updateOne({userId: req.userId}, {$inc: {balance: -amount}}).session(session)
  await Account.updateOne({userId: to}, {$inc: {balance: amount}}).session(session)

  // commit the transaction
  await session.commitTransaction();
  return res.json({
    message: "transfer successful"
  })


});

module.exports = router;
