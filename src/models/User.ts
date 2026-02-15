import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  publicKey: string;
  role: "freelancer" | "client" | "admin";
  username?: string;
  email?: string;
  avatarUrl?: string;
  skills?: string[];
  hourlyRate?: number;
  nonce?: string; // For auth challenge
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    publicKey: { type: String, required: true, unique: true, index: true },
    role: {
      type: String,
      enum: ["freelancer", "client", "admin"],
      default: "freelancer",
    },
    username: { type: String },
    email: { type: String },
    avatarUrl: { type: String },
    skills: { type: [String], default: [] },
    hourlyRate: { type: Number },
    nonce: { type: String },
  },
  { timestamps: true },
);

export default mongoose.model<IUser>("User", UserSchema);
