//import UsersManager from "../dao/mongoManagers/usersManager.mongo.js";
import UsersService from "../services/users.services.js";

//const userManager = new UsersManager();
const userService = new UsersService();

export const getUsers = async (req, res) =>{
//    const users = await userManager.getUsers();
    const users = await userService.getUsers();
    // TO DO: Mover la lógica de la validación de usuarios al manager
    if(users.length === 0){
        res.send('There are not registered users yet!');
    }else{
        res.json(users);
    }
}

export const getUserById = async (req, res) =>{
    const id = req.params.id;
    const userId = await userManager.getUserById(id);
    res.send(userId);
}

export const createNewUser = async (req, res) =>{
    const newUser = req.body;
    const createUser = await userManager.createNewUser(newUser);
    res.send(createUser);
}

export const updateUser = async (req, res) =>{
    const id = req.params.id;
    const dataToUpdate = req.body;
    if(Object.keys(req.body).length === 0) throw new Error('Empty request body');
    const updatedUser = await userManager.updateUser(id, dataToUpdate)
    res.send(updatedUser);
}

export const deleteUser = async (req, res) =>{
    const id = req.params.id;
    const userToDelete = await userManager.deleteUser(id);
    res.send(userToDelete);
}