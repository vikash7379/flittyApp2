const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    maxLength: [20, "Name cannot exceed 20 characters"],
    required: [true, "Name cannot be empty"],
  },
  email: {
    type: String,
    maxLength: [20, "Name cannot exceed 20 characters"],
    required: [true, "Name cannot be empty"],
    unique: true,
  },
  lastname: {
    type: String,
    required: [true, "Pass is required"],
  },
  phone:{
    type:Number,
    required:true
  }
});


module.exports = mongoose.model("User", userSchema);