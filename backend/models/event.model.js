import mongoose, { Schema } from "mongoose";

const eventSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: String,
        requried: true
    },
    time:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    tickets:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket'
    },
},{
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

export default Event;