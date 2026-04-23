const express = require('express')
const mongoose = require('mongoose')
const { authMiddleware } = require('../middleware')
const {Account} = require('../db')

const router = express.Router()

router.get('/balance', authMiddleware, async(req, res)=>{
    const {userId} = req.body;
    const account = Account.findOne({
        userId,
    })

    res.json({
        balance: account.balance
    })
})

router.post('/transfer', authMiddleware, async(req, res)=>{
    // initiate mongoose session
    // check for sufficiant balance
    // - abortTransaction if funds are not enough
    // - commitTransaction if enough
})
