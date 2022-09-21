const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const schema = new Schema ({

    name: {type: String, required: false},
    date: {type: String, required: false},
    time: {type: Number, required: false},
    address: {type: String, required: false},
    mobile: {type: String, required: false},
    amount: {type: Number, required: false},
    issue: {type: String, required: false},
    usuario: { type: Schema.Types.ObjectId, ref:"usuarios"},
    admin: { type: Schema.Types.ObjectId, ref:"admins"},
},

{
  timestamps: true,
}

);


module.exports = mongoose.model("citas", schema);