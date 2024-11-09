import mongoose, { Schema, model } from "mongoose";

const DocUserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Email is invalid",
        ],
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    clinicCode: {
        type: String,
        required: [true, "Clinic code is required"]
    },
}, {
    timestamps: true,
});

const DocUser = mongoose.models?.DocUser || model('DocUser', DocUserSchema);
export default DocUser;
