const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    quote: { type: String },
  
   
  },
  { collection: "user-data" }
);

const UserModel = mongoose.model("user-data", UserSchema);

module.exports = UserModel;
