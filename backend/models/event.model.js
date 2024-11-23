import mongoose, { Schema } from "mongoose";

const eventSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
},{
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

export default Event;