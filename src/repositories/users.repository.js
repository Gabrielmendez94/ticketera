export default class UsersRepository{
    constructor(dao){
        this.dao = dao;
    }

    async getUsers (){
        const users = await this.dao.getUsers();
        return users;
    }

    async getUserById(id){
        const user = await this.dao.getUserById(id);
        return user;
    }

    async createNewUser (addUser){
        const newUser = await this.dao.createNewUser(addUser);
        return newUser;
    }

    async updateUser (id, dataToUpdate){
        const userToUpdate = await this.dao.updateUser(id, dataToUpdate);
        return userToUpdate;
    }

    async deleteUser (id){
        const userToDelete = await this.dao.deleteUser(id);
        return userToDelete
    }

}