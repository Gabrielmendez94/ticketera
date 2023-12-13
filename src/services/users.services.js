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
    
    createNewUser = async(addUser) =>{
        const newUser = await this.usersRepository.createNewUser(addUser);
        
        const {first_name, last_name, date_birth, dni, user, role, location, mail} = addUser;

        if (!first_name || !last_name || !dni || !user || !location || !mail){
            throw new Error ('Failed to add a New User')
        }else{
            return newUser;
        }
    }
    updateUser = async()=>{

    }
    
    deleteUser = async(id)=>{
        return this.usersRepository.deleteUser(id);
    }


}