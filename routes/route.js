const express = require("express")
const router = express.Router();
const Task = require('../models/schema')

router.get('/', async (req,res)=>{
    try {
        const task = await Task.find()
        res.json(task);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message})
    }
})

router.post('/', async (req,res)=>{
    const task = new Task({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const newTask = await task.save()
        res.status(200).json(newTask)
    } catch (error) {
        console.error(err);
        res.status(400).json({message: err.message})
    }
})

router.put('/:id', async (req,res)=>{
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.json(task)
    } catch (err) {
        console.error(err);
        res.status(400).json({message: err.message})
    }
})

router.delete('/:id', async (req,res)=>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({message: "Task Deleted"})
    } catch (err) {
        res.status(500).json({message: err.message})      
    }
})

module.exports = router;