import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        requred:true,
        },
    classes:{
        type: [String]
    }
});

export default mongoose.model("School",HotelSchema);