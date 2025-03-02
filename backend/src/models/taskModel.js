//Creating the model for a task object
//Connect to mongoode
const mongoose = require("mongoose");

//Set the schema
const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, //Task name or objective
    status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" }, //Set status as pending as default and give options to change
  },
  { timestamps: true } //timestamp means it exists
);

module.exports = mongoose.model("Task", taskSchema);
