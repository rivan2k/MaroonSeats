export default function EventDetails({ event }) {
    if (!event) return null;
    return (
        <div>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
        </div>
    )
}