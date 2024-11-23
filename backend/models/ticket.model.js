import mongoose, { Schema } from "mongoose";

const ticketSchema = mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'Event', 
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
},{
    timestamps: true
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;