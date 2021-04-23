const accountModel = require("../models/transactions.model");

// deposit
const updateCash = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["account.cash"];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates !' })
    }
    // console.log(req.body['account.cash'], 'req.body');
    try {
        const account = await accountModel.findByIdAndUpdate(req.params.id,{ $inc: {"account.cash" : req.body['account.cash']} }, { new: true, runValidators: true });
        console.log(account, 'account');
        if (!account) {
            return res.status(404).send({error : 'Account not found'})
        }
        res.send(account)
    }
    catch (error) {
        res.status(400).json(error)
    }
};

module.exports = {
    deposit : updateCash
};

