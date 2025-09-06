import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./Pages.module.css";
import { Stack, Table, Checkbox, Button } from "@mantine/core";

import EventDetails from "../components/EventDetails";
import TicketTable from "../components/TicketTable";  

function EventPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [seats, setSeats] = useState({}); 

 
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

  
  useEffect(() => {
    fetchEvent();
  }, [id]);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>{error}</p>;

  const elements = event?.tickets || [
    { price: 30, section: 330, availableSeats: 80, totalSeats: 100 },
    { price: 40, section: 330, availableSeats: 150, totalSeats: 200 },
    { price: 100, section: 330, availableSeats: 30, totalSeats: 50 },
    { price: 1000, section: 330, availableSeats: 5, totalSeats: 10 },
  ];

  const handleSeatChange = (price, event) => {
    const value = event.target.value;
    setSeats(prevSeats => ({
      ...prevSeats,
      [price]: value ? parseInt(value, 10) : 0
    }));
  };

  const handleBuyButtonClick = async () => {
    try {
      const ticketsToUpdate = elements.map((element) => {
        const selectedSeats = seats[element.price] || 0;
        return {
          ticketId: element._id || element.price,
          availableSeats: element.availableSeats - selectedSeats
        };
      });


      await Promise.all(
        ticketsToUpdate.map(ticket =>
          axios.put(`http://localhost:5000/api/tickets/${ticket.ticketId}`, {
            availableSeats: ticket.availableSeats
          })
        )
      );

      alert('Tickets successfully purchased!');
      
      
      fetchEvent();  


      navigate("/thanks");
    } catch (error) {
      console.error("Error purchasing tickets:", error);
      alert("There was an error with your purchase.");
    }
  };

  return (
    <>
      <div style={{ textAlign: "left", marginTop: "20px", paddingBottom: "10px", paddingLeft: "20px" }}>
        <EventDetails event={event} />
      </div>
      <div className={classes.container}>
        <Stack className={classes.stack}>
          <TicketTable
            tickets={elements}
            seats={seats}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            onSeatChange={handleSeatChange}
          />
          <Button variant="filled" className={classes.button} onClick={handleBuyButtonClick} style={{ textAlign: "center" }}>
            Buy
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default EventPage;
