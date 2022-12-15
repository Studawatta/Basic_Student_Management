import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    schools:{
        type:[String]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

export default mongoose.model("User", UserSchema);