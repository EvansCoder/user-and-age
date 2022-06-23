import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRoute from "./routes/users.js";
import mongoose from "mongoose";

dotenv.config()

const app = express();
const port = process.env.PORT;
const MONGODB_URI=process.env.MONGODB_URI
// middleware
app.use(cors());
app.use(express.json());

// connect to db
mongoose.connect(MONGODB_URI,{useNewUrlParser: true}).then(()=>{
  console.log("Connected to MongoDB");
}).catch(() => console.log("Error connecting to MongoDB"))

// routes
app.get("/", (req, res) => {
  res.status(200).json({ msg: "OK" });
});
app.use('/user',usersRoute)

// listen
app.listen(port, () => {
  console.log("listening on port " + port);
});
