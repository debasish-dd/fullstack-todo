import e from "express";
import isLogin from "../middlewares/auth.middleware.js";
import { addTodoController, deleteTodoController, updateTodoController } from "../controllers/todo.controller.js";

const route = e.Router();

route.use(isLogin)

route.post("/addTodo" , addTodoController )
route.put("/updateTodo/:id" , updateTodoController)
route.delete("/deleteTodo/:id" , deleteTodoController)
export default route