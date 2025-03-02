//Establish routes through Task creation
const express = require("express");
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");

//Create router
const router = express.Router();

//Establish routes for operations
router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
