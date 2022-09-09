const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const schema = new Schema ({

    name: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: Number, required: true},
},

{
  timestamps: true,
}

);


module.exports = mongoose.model("citas", schema);