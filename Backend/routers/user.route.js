import express from "express"
import { login, profile, register } from "../controllers/user.controller.js";
import isLogin from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/register" , register);
router.post("/login" , login);
router.get("/profile" , isLogin , profile);
export default router