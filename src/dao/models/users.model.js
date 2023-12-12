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
    },
    dni:{
        type: Number,
        required: true
    },
    user:{
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    location: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model(collection, userSchema);

export default UserModel;