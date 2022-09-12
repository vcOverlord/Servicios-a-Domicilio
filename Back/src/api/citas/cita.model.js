const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const schema = new Schema ({

    name: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: Number, required: true},
    usuario: [{ type: Schema.Types.ObjectId, ref:"usuarios"}],
    admin: [{ type: Schema.Types.ObjectId, ref:"admins"}],
},

{
  timestamps: true,
}

);


module.exports = mongoose.model("citas", schema);