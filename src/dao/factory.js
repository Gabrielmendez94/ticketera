import UsersManager from "./mongoManagers/usersManager.mongo.js";
import config from "../config/config.js"

const PERSISTENCE = config.persistence;

export class UsersDaoFactory{
    static getDao(){
        switch(PERSISTENCE){
            case 'MONGO':
                return new UsersManager();
            case 'FILE':
                throw new Error('File persistence not implemented yet');
            default:
                return new UsersManager();
        }
    }
}