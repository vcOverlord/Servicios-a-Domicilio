const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const schema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    mobile: {type: Number, required: true},
    address: {type: String, required: true},
    motivo: {type: String, required: false},
    cita: [{type: String, required: false}],
});

schema.pre("save", function (next) {  
this.password = bcrypt.hashSync(this.password, 10);
next();
});

module.exports = mongoose.model("usuario", schema);