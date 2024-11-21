import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please provide a title"],
      maxlength: [40, "title should be under 40 characters"],
      unique: true,
    },
    description: {
      type: String,
      default: "No description",
      maxlength: [200, "description should be under 200 characters"],
    },
    dueDate: {
      type: Date,
      default: Date.now(),
      required: [true, "please provide a due date"],
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const TaskModel = mongoose.model("Task", TaskSchema);


export default TaskModel;