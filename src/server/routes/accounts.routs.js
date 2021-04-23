const express = require("express");
const router = express.Router();
const accountControler = require("../controllers/account.contorller");

router
  .get("/", (req, res) => {
    accountControler.geAll(req, res);
  })
  .get("/:id", (req, res) => {
    accountControler.getSpecificAccount(req, res);
  })
  .post("/", (req, res) => {
    accountControler.create(req, res);
  })
  .put("/transform", (req, res) => {
    accountControler.transferMoney(req, res);
  })
  .put("/depositing/:id", (req, res) => {
    accountControler.deposit(req, res);
  })

module.exports = router;



// "start": "npm run build && node src/server/index.js",
