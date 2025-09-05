import Event from "../models/event.model.js";

// SRP: only handles event business logic
// OCP: new logic as new methods without modifying existing ones

export default class EventService{
    static async getAllEvents(){
        return await Event.find({});
    }
    static async getEventById(id){
        return await Event.findById(id).populate('tickets');
    }
    static async createEvent(eventData){
        const newEvent = new Event(eventData);
        return await newEvent.save();
    }
    static async updateEvent(id, eventData){
        return await Event.findByIdAndUpdate(id, eventData, { new: true });
    }
    static async deleteEvent(id){
        return await Event.findByIdAndDelete(id);
    }
    static async findEventsByLocation(location){
        return await Event.find({ location });  // OCP
    }
}

// Liskov Substitution Principle: can be used wherever EventService is expected
export class VIPEventService extends EventService {
    static async getAllEvents(){
        return await Event.find({isVIP: true});
    }
}