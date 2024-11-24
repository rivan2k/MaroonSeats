import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import classes from "./Pages.module.css";
import { Stack, Table, Checkbox, Button } from "@mantine/core";

function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [seats, setSeats] = useState({}); 

  
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

  const rows = elements.map(element => {
    const selectedSeats = seats[element.price] || 0;
    const totalPrice = (selectedSeats * element.price).toFixed(2); 

    return (
      <Table.Tr key={element.price} bg={selectedRows.includes(element.price) ? "var(--mantine-color-blue-light)" : undefined}>
        <Table.Td>
          <Checkbox
            aria-label="Select row"
            checked={selectedRows.includes(element.price)}
            onChange={event =>
              setSelectedRows(
                event.currentTarget.checked
                  ? [...selectedRows, element.price]
                  : selectedRows.filter(price => price !== element.price)
              )
            }
          />
        </Table.Td>
        <Table.Td>{element.price}</Table.Td>
        <Table.Td>{element.section}</Table.Td>
        <Table.Td>{element.totalSeats}</Table.Td>
        <Table.Td>{element.availableSeats}</Table.Td> 
        <Table.Td>
          <input
            type="number"
            min="0"
            max={element.availableSeats}
            value={selectedSeats}
            onChange={event => handleSeatChange(element.price, event)}
            style={{ width: '60px', textAlign: 'center' }}
          />
        </Table.Td>
        <Table.Td>{totalPrice}</Table.Td> 
      </Table.Tr>
    );
  });

  return (
    <>
      <div style={{ textAlign: "left", marginTop: "20px", paddingBottom: "10px", paddingLeft: "20px" }}>
        {event ? (
          <div>
            <h2 style={{ marginBottom: "0px" }}>{event.name}</h2>
            <p style={{ marginBottom: "0px" }}>Time: {event.time}</p>
            <p style={{ marginBottom: "0px" }}>Location: {event.location}</p>
            <p style={{ marginBottom: "60px" }}>Date: {event.date}</p>
          </div>
        ) : (
          <p>No event details available.</p>
        )}
      </div>
      <div className={classes.container}>
        <Stack className={classes.stack}>
          <Table highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Select</Table.Th>
                <Table.Th>Ticket Price</Table.Th>
                <Table.Th>Section</Table.Th>
                <Table.Th>Total Seats</Table.Th>
                <Table.Th>Seats Left</Table.Th>
                <Table.Th># of Seats</Table.Th>
                <Table.Th>Total Price</Table.Th> 
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>

          <Link to="/thanks" style={{ textAlign: "center" }}>
            <Button variant="filled" className={classes.button}>Buy</Button>
          </Link>
        </Stack>
      </div>
    </>
  );
}

export default EventPage;
