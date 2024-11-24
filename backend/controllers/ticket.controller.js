import Ticket from '../models/ticket.model.js';
import Event from "../models/event.model.js";
import mongoose from "mongoose";

export const getTicket = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.log("error in fetching products.", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const createTicket = async (req, res) => {
  const { eventId, section, price, totalSeats, availableSeats } = req.body;

  if (!eventId || !section || !price || !totalSeats || !availableSeats) {
    return res.status(400).json({
      success: false,
      message: "Please provide eventId, section, price, and availableSeats",
    });
  }

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    const existingTicket = await Ticket.findOne({ event: eventId, section, price });

    if (existingTicket) {
      return res.status(400).json({
        success: false,
        message: "A ticket with this price and section already exists for the event.",
      });
    }

   
    const newTicket = new Ticket({
      eventId: event._id, 
      section,
      price,
      totalSeats,
      availableSeats,
    });

    await newTicket.save();

    event.tickets.push(newTicket._id);
    await event.save();

    res.status(201).json({ success: true, data: newTicket });
  } catch (error) {
    console.error("Error creating ticket:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

  


export const updateTicket = async (req, res) => {
  const { id } = req.params;
  const { price, section, totalSeats, availableSeats } = req.body;

  if (price && isNaN(price)) {
    return res.status(400).json({ success: false, message: "Price must be a number" });
  }
  if (totalSeats && isNaN(totalSeats)) {
    return res.status(400).json({ success: false, message: "Total seats must be a number" });
  }
  if (availableSeats && isNaN(availableSeats)) {
    return res.status(400).json({ success: false, message: "Available seats must be a number" });
  }
  if (section && typeof section !== "string") {
    return res.status(400).json({ success: false, message: "Section must be a valid string" });
  }


  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid Ticket ID" });
  }

  try {

    const updateFields = {};
    if (price !== undefined) updateFields.price = parseFloat(price); 
    if (section !== undefined) updateFields.section = section.trim();  
    if (totalSeats !== undefined) updateFields.totalSeats = parseInt(totalSeats); 
    if (availableSeats !== undefined) updateFields.availableSeats = parseInt(availableSeats); 

    const updatedTicket = await Ticket.findByIdAndUpdate(id, updateFields, { new: true });

    if (!updatedTicket) {
      return res.status(404).json({ success: false, message: "Ticket not found" });
    }

    res.status(200).json({ success: true, data: updatedTicket });

  } catch (error) {
    console.error("Error updating ticket:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};





export const deleteTicket = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid Ticket ID" });
  }

  try {
    const ticket = await Ticket.findByIdAndDelete(id);

    if (!ticket) {
      return res.status(404).json({ success: false, message: "Ticket not found" });
    }

    res.status(200).json({ success: true, message: "Ticket deleted successfully" });
  } catch (error) {
    console.error("Error deleting ticket:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
