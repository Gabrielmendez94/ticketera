import { usersRepository } from "../repositories/index.js";

export default class UsersService {
    constructor (){
        this.usersRepository = usersRepository;
    }

    getUsers = async()=>{
        return this.usersRepository.getUsers();
    }

    getUserById = async()=>{
        return this.usersRepository.getUserById();
    }
    
    createNewUser = async() =>{
        return this.usersRepository.createNewUser();
    }
    updateUser = async()=>{

    }
    
    deleteUser = async()=>{

    }


}