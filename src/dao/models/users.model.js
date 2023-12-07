import mongoose from "mongoose";

const collection = "users";

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    date_birth:{
        type: Date,
//          required: true
    },
    dni:{
        type: Number,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    }
});

const UserModel = mongoose.model(collection, userSchema);

export default UserModel;