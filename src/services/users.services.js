import { usersRepository } from "../repositories/index.js";

export default class UsersService {
    constructor (){
        this.usersRepository = usersRepository;
    }

    getUsers = async()=>{
        return this.usersRepository.getUsers();
    }

    getUserById = async(id)=>{
        return this.usersRepository.getUserById(id);
    }
    
    createNewUser = async() =>{
        return this.usersRepository.createNewUser();
    }
    updateUser = async()=>{

    }
    
    deleteUser = async(id)=>{
        return this.usersRepository.deleteUser(id);
    }


}