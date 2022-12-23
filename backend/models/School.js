import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
    school:{
        type:String,
        requred:true,
        },
    classes:{
        type: [String]
    }
});

export default mongoose.model("School",HotelSchema);