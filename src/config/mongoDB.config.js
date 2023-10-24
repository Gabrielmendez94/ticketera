import mongoose from "mongoose";
import config from "./config.js";

const MONGO_USER = config.dbUser, MONGO_PSWD = config.dbPswd, MONGO_HOST = config.dbHost, MONGO_NAME= config.dbName;

export default function configureMongo(){
    const mongo = `mongodb+srv://${MONGO_USER}:${MONGO_PSWD}@${MONGO_HOST}/${MONGO_NAME}`;
    mongoose.connect(mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log(`MongoDB connection successful to ${MONGO_NAME} database`);
    })
    .catch(err =>{
        console.log(`Cannot connect to MongoDB ${MONGO_NAME} database - ${err}`);
    })
}