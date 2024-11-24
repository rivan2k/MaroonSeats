import classes from "./Pages.module.css"
import { Title, Stack, Table, Checkbox, Button, Text, Group, Center } from "@mantine/core"
import { useState } from "react"
import { Link } from "react-router-dom"

const elements = [
  { price: 30, section: 330, seats: 0 },
  { price: 40, section: 330, seats: 0 },
  { price: 100, section: 330, seats: 0 },
  { price: 1000, section: 330, seats: 0 }
]

function ManagerView() {
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
            updateSeats(element.price, updatedSeats); 
        }}
        style={{
            width: '60px',
            textAlign: 'center',
        }}
    />
      </Table.Td>
    </Table.Tr>
  ))
  return (
    <div className={classes.container}>
      <Stack className={classes.stack}>
        <Title className={classes.title}>Texas A&M vs. UT Austin </Title>
        <Text size="md" className={classes.title}>Location: Kyle Field - Date: November - Time: 6:30 PM</Text>

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

        <Group style={{ justifyContent: 'center' }}>
          <Button variant="filled" color="red">Delete</Button>
          <Link to="/ManagerAdd">
            <Button variant="filled" color="green">Add</Button>
          </Link>
        </Group>
      </Stack>
    </div>
  )
}

export default ManagerView;
