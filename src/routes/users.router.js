import { Router } from "express";
import { getUsers, getUserById, createNewUser, updateUser, deleteUser } from "../controllers/users.controller.js";

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createNewUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;