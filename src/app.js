import express from 'express';
import config from './config/config.js';
import configureMongo from './config/mongoDB.config.js';
import usersRouter from './routes/users.router.js';

//SV Connection
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Enviroment Variable
const PORT = config.port;

app.listen(PORT, console.log(`Server listening on port ${PORT}`));

//MongoDB Connection
configureMongo();

//ROUTES
app.use('/api/users', usersRouter);