import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser); //method post
router.patch("/users/:id", updateUser); //method patch untuk update
router.delete("/users/:id", deleteUser); //method delete

export default router;
