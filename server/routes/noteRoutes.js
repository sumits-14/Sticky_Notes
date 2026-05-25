import express from "express"
import { Notes } from "../models/Notes.js"

const router = express.Router()

// Create Notes
router.post('/', async(req, res) => {
     try {
          const note = await Notes.create(req.body)

          res.status(201).json(note)
     } catch (error) {
          res.status(500).json({
               message : error.message
          })
     }
})

// Get All Notes
router.get('/', async (req, res) => {
     try {
          const notes = await Notes.find()

          res.json(notes)
     } catch (error) {
          res.status(500).json({
               message : error.message
          })
     }
})

// Delete Note

router.delete("/:id", async (req, res) => {
     try {
          await Notes.findByIdAndDelete(req.params.id)

          res.json({
               message : "Note Delete!"
          })
     } catch (error) {
          res.status(500).json({
               message : error.message
          })          
     }
})

export default router




