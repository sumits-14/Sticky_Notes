import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
     {
          line: {
               type: "String",
               required: true
          },
          

     },
     {
          timestamps: true
     }

)

export  const Notes = mongoose.model('Notes', notesSchema)






