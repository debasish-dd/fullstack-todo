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
                message: "Both Title and body are required",
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

export const updateTodoController = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        const { title, body } = req.body;

        todo.title = title;
        todo.body = body;

        await todo.save();

        return res.status(200).json({
            message: "Todo updated successfully",
            success: true,
            todo: list
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            success: false,
            error: error.message
        })
    }
}

export const deleteTodoController = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findOne({
            _id: id,
            user: req.user.id
        })
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        await Todo.findByIdAndDelete(id);
        await User.findByIdAndUpdate(
            req.user.id,
            { $pull: { list: id } },
        );
        return res.status(200).json({
            message: "Todo deleted successfully",
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            success: false,
            error: error.message
        })
    }
}