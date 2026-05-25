import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import noteRoutes from "./routes/noteRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/notes", noteRoutes);

mongoose
     .connect(process.env.MONGO_URI)
     .then(() => console.log('mongo connected!'))
     .catch((err) => console.log(err))

app.listen(5000, () => {
     console.log(`Server is running on PORT 5000`)
})

































