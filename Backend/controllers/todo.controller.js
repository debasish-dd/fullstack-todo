import { User } from "../models/user.models.js";
import { Todo } from "../models/todo.models.js"

export const addTodoController = async (req, res) => {
    try {
        const existingUser = req.user;
        if (!existingUser) {
            return res.status(400).json({
                message: "User not found",
                success: false
            });
        }
        const id = existingUser.id;

        const { title, body } = req.body;
        if (!title || !body) {
            return res.status(400).json({
                message: "Title and body are required",
                success: false
            });
        }
        const newTodo = new Todo({
            title,
            body,
            user: id
        })

        await newTodo.save();
        await User.findByIdAndUpdate(
            id,
            { $push: { list: newTodo._id } },
            { new: true }
        );


        return res.status(201).json({
            message: "Todo created successfully",
            success: true,
            todo: newTodo
        });


    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            success: false,
            error: error.message
        })
    }


}