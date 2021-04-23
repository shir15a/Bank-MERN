const accountModel = require("../models/account.model");

// Create new account
const createAccount = (req, res) => {
    const {
        israeliId,
        name,
        email,
    } = req.body;

    const user = new accountModel({
        israeliId,
        name,
        email,
    });

    user.save((err) => {
        if (err) return res.status(400).json({ error: err });
        return res.status(201).json({ success: user });
    });
};

// Show all accounts
const getAllUsers = async (req, res) => {
    try {
        const accounts = await accountModel.find({})
        return res.send(accounts);
    }
    catch (error) {
        res.status(500).json({ error })
    }
};


//Show account by ID
const getAccountById = async (req, res) => {
    const { id } = req.params;
    try {
        let product = await accountModel.findOne({ "_id": id })
        return res.status(200).send(product)
    }
    catch (error) {
        return res.status(404).send(error)
    }
};

// // deposit
// const updateCash = async (req, res) => {
//     const updates = Object.keys(req.body);
//     const allowedUpdates = ["account.cash"];
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates !' })
//     }
//     // console.log(req.body['account.cash'], 'req.body');
//     try {
//         const account = await accountModel.findByIdAndUpdate(req.params.id,{ $inc: {"account.cash" : req.body['account.cash']} }, { new: true, runValidators: true });
//         if (!account) {
//             return res.status(404).send({error : 'Account not found'})
//         }
//         res.send(account)
//     }
//     catch (error) {
//         res.status(400).json(error)
//     }
// };

// const transferMoney = async (req, res) => {
//     const updates = Object.keys(req.body);
//     console.log(updates, 'updates');
//     const allowedUpdates = ['from', 'to', 'account.cash'];
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
//     console.log(isValidOperation,'isValidOperation');
//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates !' })
//     }
//     console.log(req.body.from);
//     try {
//         const fromUser = await accountModel.findByIdAndUpdate(req.body.from, {"account.cash": cash - req.body.amount}, { new: true, runValidators: true });
//         const toUser = await accountModel.findByIdAndUpdate(req.body.to, {"account.cash": cash + req.body.amount}, { new: true, runValidators: true });

//         if (!fromUser || !toUser) {
//             return res.status(404).send()
//         }
//         // res.send(product)
//     }
//     catch (error) {
//         res.status(400).json(error)
//     }
// };

module.exports = {
    geAll: getAllUsers,
    getSpecificAccount: getAccountById,
    create: createAccount,
    // transferMoney : transferMoney,
    // deposit : updateCash
};