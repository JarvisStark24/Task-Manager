import asyncHandler from 'express-async-handler'
import TaskModel from '../../models/tasks/TaskModel.js';

export const createTask = asyncHandler(async (req, res) => {
    try {
        const { title, description, dueDate, status, completed, priority } = req.body;

        if(!title || title.trim() === "") {
            res.status(400).json({ message: "Please provide a title" });
        }
        if(!description || description.trim() === "") {
            res.status(400).json({ message: "Please provide a description" });
        }

        const task = new TaskModel({
            title,
            description,
            dueDate,
            status,
            completed,
            priority,
            user: req.user._id
        });

        await task.save();

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            task
        });
    } catch (error) {
        console.log("Error in createTask: ", error.message)
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error
        });
    }
})


export const getTasks = asyncHandler(async (req, res) => {
    try {
        const userId = req.user._id;

        if(!userId) {
            res.status(400).json({ message: "User not found" });
        }

        const tasks = await TaskModel.find({ user: userId });

        res.status(200).json({
            success: true,
            message: "Tasks fetched successfully",
            length: tasks.length,
            tasks
        });
    } catch (error) {
        console.log("Error in getTask: ", error.message)
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error
        });
    }
})

export const getTask = asyncHandler(async (req, res) => {
    try {
        const userId = req.user._id;

        const {id} = req.params;
        
        if(!id) {
            res.status(400).json({ message: "Please provide a task id" });
        }

        const task = await TaskModel.findById(id);

        if (!task) {
            res.status(404).json({ message: "Task not found" });
        }

        if(!task.user.equals(userId)) {
            res.status(401).json({ message: "Unauthorized to access!" });
        }

        res.status(200).json({
            success: true,
            message: "Task fetched successfully",
            task
        });
        
    } catch (error) {
        console.log("Error in getTask: ", error.message)
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error
        });
    }
})

export const updateTask = asyncHandler(async (req, res) => {
    try {
        const userId = req.user._id;

        const {id} = req.params;
        const { title, description, dueDate, status, completed, priority } = req.body;

        if(!id) {
            res.status(400).json({ message: "Please provide a task id" });
        }

        const task = await TaskModel.findById(id);

        if (!task) {
            res.status(404).json({ message: "Task not found" });
        }

        // Checking the owner
        if(!task.user.equals(userId)) {
            res.status(401).json({ message: "Unauthorized to access!" });
        }


        if(!title || title.trim() === "") {
            res.status(400).json({ message: "Please provide a title" });
        }
        if(!description || description.trim() === "") {
            res.status(400).json({ message: "Please provide a description" });
        }

        // Update or Keep the previous value
        task.title = title || task.title;
        task.description = description || task.description;
        task.dueDate = dueDate || task.dueDate;
        task.status = status || task.status;
        task.completed = completed || task.completed;
        task.priority = priority || task.priority;
        
        await task.save();

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            task
        });
    } catch (error) {
        console.log("Error in updateTask: ", error.message)
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error
        });
    }
})

export const deleteTask = asyncHandler(async (req, res) => {
    try {
        const userId = req.user._id;

        const {id} = req.params;

        const task = await TaskModel.findById(id);

        if(!id) {
            res.status(400).json({ message: "Please provide a task id" });
        }


        if (!task) {
            res.status(404).json({ message: "Task not found" });
        }

        // Checking the owner
        if(!task.user.equals(userId)) {
            res.status(401).json({ message: "Unauthorized to access!" });
        }

        await TaskModel.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Task deleted successfully",
            task
        });
    } catch (error) {
        console.log("Error in deleteTask: ", error.message)
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error
        });
    }
})