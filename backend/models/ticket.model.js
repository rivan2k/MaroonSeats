import mongoose, { Schema } from "mongoose";

const ticketSchema = mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'Event', 
        required: true
    },
    section:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    totalSeats:{
        type: Number,
        required: true
    },
    availableSeats:{
        type: Number,
        required: true
    }
},{
    timestamps: true
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;