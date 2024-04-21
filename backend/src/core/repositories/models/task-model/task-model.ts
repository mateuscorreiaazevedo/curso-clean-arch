import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
  description: String,
  done: Boolean
})

export default mongoose.model('Task', taskSchema)
