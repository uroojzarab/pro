import { Timestamp } from "mongodb";
import mongoose from "mongoose";
const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  avatar: {
    type: String, //cloudnary url
    require: true,
  },
  coverimage: {
    type: String, //cloudnary url
  },
  watchhistory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vedio",
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  refreshtoken: {
    type: String,
  },
  timestamp: true,
});

export const User = mongoose.model("User", userschema);
