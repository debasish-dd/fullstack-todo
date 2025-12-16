import e from "express";
import isLogin from "../middlewares/auth.middleware.js";
import { addTodoController } from "../controllers/todo.controller.js";

const route = e.Router();

route.post("/addTodo" , isLogin, addTodoController )


export default route