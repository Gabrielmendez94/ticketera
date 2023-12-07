import { UsersDaoFactory } from "../dao/factory.js";
import UsersRepository from "./users.repository.js";

const usersManager = UsersDaoFactory.getDao();


export const usersRepository = new UsersRepository(usersManager);