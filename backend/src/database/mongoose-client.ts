import { connect } from "mongoose"

export const connectDatabase = async () => {
  await connect('mongodb://localhost:27017/mongodb-data')
}