import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import classes from "./Pages.module.css"
import { Title, Stack, Table, Checkbox, Button, Text } from "@mantine/core"


function EventPage() {
  const elements = [
    { price: 30, section: 330, seats: 0 },
    { price: 40, section: 330, seats: 0 },
    { price: 100, section: 330, seats: 0 },
    { price: 1000, section: 330, seats: 0 }
  ]

  const [selectedRows, setSelectedRows] = useState([])

    const rows = elements.map(element => (
    <Table.Tr
      key={element.price}
      bg={
        selectedRows.includes(element.price)
          ? "var(--mantine-color-blue-light)"
          : undefined
      }
    >
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
      <Table.Td>
        <input
        type="number"
        value={element.seats}
        onChange={event => {
            const updatedSeats = event.target.value;
            updateSeats(element.price, updatedSeats); // Replace with your update logic
        }}
        style={{
            width: '60px',
            textAlign: 'center',
        }}
    />
      </Table.Td>
    </Table.Tr>
  ))

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
    <>
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
        <div className={classes.container}>
        <Stack className={classes.stack}>
          <Title className={classes.title}>*Event Name* {/*This would be where the eventID would go*/}</Title>
          <Text size="md" className={classes.title}>Location: Kyle Field - Date: *temp date* - Time: *temp time*</Text>

          <Table highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Select</Table.Th>
                <Table.Th>Ticket Price</Table.Th>
                <Table.Th>Section</Table.Th>
                <Table.Th># of seats</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>

          <Link to="/thanks" style={{textAlign: "center"}}>
              <Button variant="filled" className={classes.button}>Buy</Button>
          </Link>
        </Stack>
      </div>
    </>
  );
}

export default EventPage;
