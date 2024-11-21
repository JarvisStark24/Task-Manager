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
        
    }
})