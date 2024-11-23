import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventPage() {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/events/${id}`);
        setEvent(response.data.data); 
      } catch (error) {
        setError("Failed to fetch event details");
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Event Details</h1>
      {event ? (
        <div>
          <h2>{event.name}</h2>
          <p>{event.time}</p>
          <p>{event.location}</p>
          <p>{event.date}</p>
        </div>
      ) : (
        <p>No event found.</p>
      )}
    </div>
  );
}

export default EventPage;
