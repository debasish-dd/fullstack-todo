import { User } from "../models/user.models.js";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters",
                success: false
            });
        }
        
        // Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
                success: false
            });
        }

        const user = await User.create({ username, password, email })

        if (!user) {
            return res.status(400).json({
                message: "User registration failed",
                success: false
            });
        }


        return res.status(201).json({
            message: "User registered successfully",
            success: true,
            user
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            success: false,
            error: error.message
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User does not exist, please register",
                success: false
            });
        }

        const hashedPass = bcrypt.compare(password, user.password);
        if (!hashedPass) {
            return res.status(400).json({
                message: "Invalid email or password",
                success: false
            });
        }

        
        


    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            success: false,
            error: error.message
        })
    }
}