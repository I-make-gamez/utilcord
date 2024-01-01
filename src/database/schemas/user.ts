import mongoose, { ObjectId, Schema } from "mongoose";

export interface user {
  id: string;
  Id: string;
  accessToken: string;
  refreshToken: string;
}

const userSchema = new Schema<user>({
  Id: {
    type: String,
    required: true,
    unique: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

export default mongoose.model("users", userSchema);
