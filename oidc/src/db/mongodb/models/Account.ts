import mongoose, { Schema } from "mongoose";

const AccountSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  email: {
    type: String,
    unique: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
});


type Account = {
    username: string;
    email: string;
    emailVerified: string;
    password: string;
}

export const Account = mongoose.model<Account>("Account", AccountSchema);
