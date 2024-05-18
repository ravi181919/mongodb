import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    recordName:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        default: 0,
        required: true
    }
}, { timestamps: true });

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema)
