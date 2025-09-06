import { Table, Checkbox } from "@mantine/core";

// Single Responsibility Principle
export default function TicketTable({ tickets, seats, selectedRows, setSelectedRows, onSeatChange }) {
  const rows = tickets.map(element => {
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
            onChange={event => onSeatChange(element.price, event)}
            style={{ width: '60px', textAlign: 'center' }}
          />
        </Table.Td>
        <Table.Td>{totalPrice}</Table.Td>
      </Table.Tr>
    );
  });

  return (
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
  );
}