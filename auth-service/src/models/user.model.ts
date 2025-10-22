import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  roles: string[];
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  roles: { type: [String], default: ["USER"] },
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model<IUser>("User", userSchema);


