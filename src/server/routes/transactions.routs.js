const express = require("express");
const router = express.Router();
const accountControler = require("../controllers/transactions.controller");

router
  .put("/transform", (req, res) => {
    accountControler.transferMoney(req, res);
  })
  .put("/depositing/:id", (req, res) => {
    accountControler.deposit(req, res);
  })

module.exports = router;
