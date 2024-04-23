import { connect } from "mongoose";

export default async function mongoConnect() {
  await connect('mongodb://localhost:27017/mongodb-data')
}