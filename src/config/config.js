import dotenv from 'dotenv';

dotenv.config();

export default{
    port: process.env.PORT,
    dbUser: process.env.MONGO_USER,
    dbPswd: process.env.MONGO_PSWD,
    dbHost: process.env.MONGO_HOST,
    dbName: process.env.MONGO_NAME
}