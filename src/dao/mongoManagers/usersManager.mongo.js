import UserModel from "../models/users.model.js";

export default class UsersManager{
    constructor(){
        this.userModel = UserModel;
    }

    async getUsers(){
        try{
            const users = await this.userModel.find({});
            return users;
        }catch(error){
            throw new Error(`Failed to get the users: ${error.message}`);
        }
    }

    async getUserById(id){
        try{
            const userData = await this.userModel.findOne({_id: id});
            return userData;
        }catch(error){
            throw new Error (`Failed to get the user: ${error.message}`);
        }
    }

    async createNewUser(addUser){
        try{
            const newUser = await this.userModel.create(addUser);
            return newUser;
        }catch(error){
            throw new Error(`Failed to add user: ${error.message}`);
        }
    }

    async updateUser(id, updatedFields){
        try{
            const {first_name, last_name, date_birth, dni, role} = updatedFields;
            const updatedUser = await this.userModel.findByIdAndUpdate(id, updatedFields);
            if(!updatedUser){
                throw new Error('User not found');
            }else{
                return updatedUser;
            }
        }catch(error){
            throw new Error(`Failed to update user: ${error.message}`);
        }
    }

    async deleteUser (id){
        try{
            const userId = await this.userModel.findByIdAndDelete(id);
            if(!userId){
                throw new Error ('User not found');
            }
        }catch(error){
            throw new error(`Failed to delete user: ${error.message}`)
        }
    }

    
}