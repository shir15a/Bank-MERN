const accountModel = require("../models/account.model");
const trasnactionModel = require("../models/transactions.model");

// deposit
const updateCash = async (req, res) => {
    const { amount } = req.body;
    console.log(amount);
    // const allowedUpdates = ["account.cash"];
    // const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    // if (!isValidOperation) {
    //     return res.status(400).send({ error: 'Invalid updates !' })
    // }
    // console.log(req.body['account.cash'], 'req.body');
    try {
        const account = await accountModel.findByIdAndUpdate(req.params.id, { $inc: { "account.cash": amount } }, { new: true, runValidators: true });
        console.log(account, 'account');
        if (!account) {
            return res.status(404).send({ error: 'Account not found' })
        }
        const trasnaction = new trasnactionModel({
            to: account._id,
            operation_type: "deposit",
            amount: amount
        });

        console.log(trasnaction, 'trasnaction');

        trasnaction.save((err) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(201).json({ account: account, trasnaction });
        });
    }
    catch (error) {
        res.status(400).json(error)
    }
};

const updateCredit = async (req, res) => {
    const { amount } = req.body;
    try {
        const account = await accountModel.findByIdAndUpdate(req.params.id, { $inc: { "account.credit": amount } }, { new: true, runValidators: true });
        console.log(account, 'account');
        if (!account) {
            return res.status(404).send({ error: 'Account not found' })
        }
        const trasnaction = new trasnactionModel({
            to: account._id,
            operation_type: "update credit",
            amount: amount
        });

        console.log(trasnaction, 'trasnaction');

        trasnaction.save((err) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(201).json({ account: account, trasnaction });
        });
    }
    catch (error) {
        res.status(400).json(error)
    }
};

const transferMoney = async (req, res) => {
    const updates = Object.keys(req.body);
    console.log(updates, 'updates');
    const allowedUpdates = ['from', 'to', 'account.cash'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    console.log(isValidOperation, 'isValidOperation');
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates !' })
    }
    console.log(req.body.from);
    try {
        const fromUser = await accountModel.findByIdAndUpdate(req.body.from, { "account.cash": cash - req.body.amount }, { new: true, runValidators: true });
        const toUser = await accountModel.findByIdAndUpdate(req.body.to, { "account.cash": cash + req.body.amount }, { new: true, runValidators: true });

        if (!fromUser || !toUser) {
            return res.status(404).send()
        }
        // res.send(product)
    }
    catch (error) {
        res.status(400).json(error)
    }
};

module.exports = {
    transferMoney: transferMoney,
    deposit: updateCash,
    updateCredit: updateCredit
};

