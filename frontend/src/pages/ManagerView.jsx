import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Stack, Table, Checkbox, Button, Modal, TextInput, NumberInput } from "@mantine/core";
import classes from "./Pages.module.css"; 

function ManagerView() {
  const { id } = useParams(); 
  const [event, setEvent] = useState(null);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [newTicket, setNewTicket] = useState({
    price: '',
    section: '',
    totalSeats: '',
    availableSeats: '',
  });
  const [selectedTicket, setSelectedTicket] = useState(null);  
  const [editTicketModal, setEditTicketModal] = useState(false); 

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

  const handleDeleteTicket = async (ticketId) => {
    try {
      await axios.delete(`http://localhost:5000/api/tickets/${ticketId}`); 
      setEvent((prevEvent) => ({
        ...prevEvent,
        tickets: prevEvent.tickets.filter((ticket) => ticket._id !== ticketId),  
      }));
    } catch (error) {
      console.error("Error deleting ticket:", error);
      alert("Failed to delete the ticket");
    }
  };

  const handleAddTicket = async () => {
    try {
      const newTicketData = {
        eventId: id,
        section: newTicket.section,
        price: newTicket.price,
        totalSeats: newTicket.totalSeats,
        availableSeats: newTicket.availableSeats,
      };
      const response = await axios.post(`http://localhost:5000/api/tickets`, newTicketData);  
      setEvent((prevEvent) => ({
        ...prevEvent,
        tickets: [...prevEvent.tickets, response.data.data],  
      }));
      setNewTicket({  
        price: '',
        section: '',
        totalSeats: '',
        availableSeats: '',
      });
    } catch (error) {
      console.error("Error adding new ticket:", error);
      alert("Failed to add new ticket");
    }
  };

  const handleUpdateTicket = async () => {
    try {
      const updatedTicketData = {
        price: selectedTicket.price,
        section: selectedTicket.section,
        totalSeats: selectedTicket.totalSeats,
        availableSeats: selectedTicket.availableSeats,
      };
      const response = await axios.put(`http://localhost:5000/api/tickets/${selectedTicket._id}`, updatedTicketData);
      setEvent((prevEvent) => ({
        ...prevEvent,
        tickets: prevEvent.tickets.map(ticket => 
          ticket._id === selectedTicket._id ? response.data.data : ticket
        ),  
      }));
      setEditTicketModal(false);  
    } catch (error) {
      console.error("Error updating ticket:", error);
      alert("Failed to update the ticket");
    }
  };

  if (loading) return <p>Loading event details...</p>;  
  if (error) return <p>{error}</p>;  

  const rows = event?.tickets.map((ticket) => (
    <Table.Tr key={ticket._id}>
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(ticket._id)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, ticket._id]
                : selectedRows.filter((id) => id !== ticket._id)
            )
          }
        />
      </Table.Td>
      <Table.Td>{ticket.price}</Table.Td>
      <Table.Td>{ticket.section}</Table.Td>
      <Table.Td>{ticket.totalSeats}</Table.Td>
      <Table.Td>{ticket.availableSeats}</Table.Td>
      <Table.Td>
        <Button
          variant="filled"
          color="red"
          onClick={() => handleDeleteTicket(ticket._id)}  
        >
          Delete Ticket
        </Button>
        <Button
          variant="filled"
          color="blue"
          onClick={() => {
            setSelectedTicket(ticket);
            setEditTicketModal(true);  
          }}
        >
          Edit Ticket
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Manager View - Event: {event.name}</h2>
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
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>

   
          <h3>Add New Ticket</h3>
          <div>
            <NumberInput
              label="Price"
              value={newTicket.price}
              onChange={(value) => setNewTicket({ ...newTicket, price: value })}
              min={0}
            />
            <TextInput
              label="Section"
              value={newTicket.section}
              onChange={(e) => setNewTicket({ ...newTicket, section: e.target.value })}
            />
            <NumberInput
              label="Total Seats"
              value={newTicket.totalSeats}
              onChange={(value) => setNewTicket({ ...newTicket, totalSeats: value })}
              min={1}
            />
            <NumberInput
              label="Available Seats"
              value={newTicket.availableSeats}
              onChange={(value) => setNewTicket({ ...newTicket, availableSeats: value })}
              min={0}
            />
            <Button variant="filled" onClick={handleAddTicket}>
              Add Ticket
            </Button>
          </div>
        </Stack>
      </div>

      <Modal opened={editTicketModal} onClose={() => setEditTicketModal(false)} title="Edit Ticket">
        <div>
          <NumberInput
            label="Price"
            value={selectedTicket?.price}
            onChange={(value) => setSelectedTicket({ ...selectedTicket, price: value })}
            min={0}
          />
          <TextInput
            label="Section"
            value={selectedTicket?.section}
            onChange={(e) => setSelectedTicket({ ...selectedTicket, section: e.target.value })}
          />
          <NumberInput
            label="Total Seats"
            value={selectedTicket?.totalSeats}
            onChange={(value) => setSelectedTicket({ ...selectedTicket, totalSeats: value })}
            min={1}
          />
          <NumberInput
            label="Available Seats"
            value={selectedTicket?.availableSeats}
            onChange={(value) => setSelectedTicket({ ...selectedTicket, availableSeats: value })}
            min={0}
          />
          <Button variant="filled" color="blue" onClick={handleUpdateTicket}>
            Update Ticket
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ManagerView;
