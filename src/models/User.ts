import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

export default model("User", UserSchema);
