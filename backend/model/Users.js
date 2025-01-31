import mongoose from "mongoose"









const UserSchema = new mongoose.Schema({

    name: String,
    age: Number,
    gender: String,
    salary: Number,
    address: String,
    status: String,
    email: String
    
})
const UserModel = mongoose.model("users", UserSchema)

export default UserModel 

