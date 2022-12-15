import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
    grade: {
        type: Number
    },
    class: {
        type: String
    }
});

export default mongoose.model("Class", ClassSchema);