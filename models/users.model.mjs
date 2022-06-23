import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    }
})
const usersModel = mongoose.model('users',usersSchema)
export default usersModel