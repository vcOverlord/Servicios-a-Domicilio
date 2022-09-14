const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const schema = new Schema ({
    name: {type: String, required: false},
    email: {type: String, required: false},
    password: {type: String, required: true},
    mobile: {type: String, required: false},
 //   cita: [{ type: Schema.Types.ObjectId, ref:"citas"}],
});

schema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  });
  
  module.exports = mongoose.model("usuarios", schema);