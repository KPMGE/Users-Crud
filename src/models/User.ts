import { Schema, model, Document } from "mongoose";

export interface UserInterface extends Document {
  name: string;
  description: string;
}

const UserSchema = new Schema<UserInterface>({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

export default model<UserInterface>("User", UserSchema);
