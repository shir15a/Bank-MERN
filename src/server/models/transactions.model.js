const mongoose = require ('mongoose');
const validator = require('validator');

const trasnaction = mongoose.model('trasnaction', {
    from: {
		type: String,
        required: false,
	},
	to: {
		type: String,
		required: false,
	},
	operation_type: {
        type: String,
        required: true,
	},
	amount: {
		type: Number,
		required: true,
	}
})

module.exports = trasnaction;
