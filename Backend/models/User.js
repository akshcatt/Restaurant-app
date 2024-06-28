import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
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
            enum: ['user', 'owner'],
            default: 'user'
        }
    }
)

const user = mongoose.model("user", UserSchema);

export default user;
