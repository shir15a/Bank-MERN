const mongoose = require ('mongoose');
const validator = require('validator');

const Account = mongoose.model('Account', {
    israeliId: {
		type: String,
		required: true,
		unique: true,
		validate(id){
            if(id.length !== 9 ){
                throw new Error('Invalid ID, id length should be nine')
            }
        }
	},
	name: {
		type: String,
		required: true,
		unique: false,
		validate(name){
            if(!name.match(/([a-zA-Z]{2,}\s[a-zA-Z]{2,})/)){
                throw new Error('Provide full name please')
            }
        }
	},
	email: {
        type: String,
        required: true,
        unique: true,
        validate(email){
            if(!validator.isEmail(email)){
                throw new Error('Invalid Email')
            }
        }
	},
	isActive: {
		type: Boolean,
		required: true,
		unique: false,
		default: true,
	},
	account: {
		credit: {
			type: Number,
			required: false,
			unique: false,
			default: 0
		},
		cash: {
			type: Number,
			required: false,
			unique: false,
			default: 0
		}
	}
})


module.exports = Account;



// const mongoose = require("mongoose");
// const productSchema = mongoose.Schema({

	// id: {
	// 	type: String,
	// 	required: true,
	// 	unique: true,
	// 	// validate(value){}
	// },
	// name: {
	// 	type: String,
	// 	required: true,
	// 	unique: false,
	// 	// validate(value){}
	// },
	// email: {
	// 	type: String,
	// 	required: true,
	// 	unique: true,
	// 	// validate(value){}
	// },
	// isActive: {
	// 	type: Boolean,
	// 	required: true,
	// 	unique: false,
	// 	default: true,
	// },
	// account: {
	// 	credit: {
	// 		type: Number,
	// 		required: true,
	// 		unique: false,
	// 		default: 0
	// 		// validate(value){}
	// 	},
	// 	cash: {
	// 		type: Number,
	// 		required: true,
	// 		unique: false,
	// 		default: 0
	// 		// validate(value){}
	// 	}

	// }

// });
// const productModel = mongoose.model("product", productSchema);
// module.exports = productModel;
