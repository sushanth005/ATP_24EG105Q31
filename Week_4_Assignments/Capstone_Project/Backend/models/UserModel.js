import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },

    lastName: {
      type: String
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["USER", "AUTHOR", "ADMIN"],
      required: true
    },

    profileImageUrl: {
      type: String
    },

    isUserActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const UserModel = model("user", userSchema);