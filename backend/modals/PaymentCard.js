const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const PaymentCard = new Schema({

    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    items:[{type : Schema.Types.ObjectId , ref : 'cart_item'}]
    
})

const card = mongoose.model("PaymentCard", PaymentCard);
module.exports = card;