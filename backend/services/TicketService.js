import Ticket from "../models/ticket.model.js";
import Event from "../models/event.model.js";

// SRP: only handles ticket business logic
// OCP: new logic as new methods without modifying existing ones

export default class TicketService{
    static async getAllTickets(){
        return await Ticket.find({});
    }
    static async getTicketById(id){
        return await Ticket.findById(id);
    }
    static async createTicket(ticketData){
        const newTicket = new Ticket(ticketData);
        return await newTicket.save();
    }
    static async updateTicket(id, ticketData){
        return await Ticket.findByIdAndUpdate(id, ticketData, { new: true });
    }
    static async deleteTicket(id){
        return await Ticket.findByIdAndDelete(id);
    }

    static async createTicketWithEventUpdate({ eventId, section, price, totalSeats, availableSeats }){
        if (!eventId || !section || !price || !totalSeats || !availableSeats) {
            throw new Error("Please provide eventId, section, price, totalSeats, and availableSeats");
        }

        const foundEvent = await Event.findById(eventId);

        if (!foundEvent) {
            throw new Error("Event not found");
        }

        const existingTicket = await Ticket.findOne({ eventId, section, price });
        if (existingTicket) {
            throw new Error("A ticket with this price and section already exists for the event.");
        }

        const newTicket = new Ticket({ eventId, section, price, totalSeats, availableSeats });
        await newTicket.save();

        foundEvent.tickets.push(newTicket._id);
        await foundEvent.save();

        return newTicket;
    }
}