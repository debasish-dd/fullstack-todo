import express from "express"
import { login, logout, profile, register } from "../controllers/user.controller.js";
import isLogin from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register" , register);
router.post("/login" , login);
router.get("/profile" , isLogin , profile);
router.post("/logout" , isLogin, logout);
export default router