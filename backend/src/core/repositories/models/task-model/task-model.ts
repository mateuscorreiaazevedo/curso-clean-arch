import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
  description: String,
  done: Boolean,
  userId: String
})

export default mongoose.model('Task', taskSchema)
