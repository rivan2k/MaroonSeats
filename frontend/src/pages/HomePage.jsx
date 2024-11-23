import React from 'react';
import { Link } from 'react-router-dom';  
import { Container, Grid, Text, Button, Image } from '@mantine/core';

function Home() {
  const events = [
    { id: "674225e96471f721302a0554", name: "Event 1" },
    { id: "2", name: "Event 2" },
    { id: "3", name: "Event 3" },
  ];

  return (
    <>
      <Container py="xl" style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <Text size="xl" weight={700}>
          Find Your Next Event
        </Text>
        <Text size="lg" mt="md" color="dimmed">
          Your gateway to unforgettable experiences starts here.
        </Text>
        <Button mt="lg" size="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
          Browse Events
        </Button>
      </Container>
      {events.map((event) => (
        <Link key={event.id} to={`/event/${event.id}`}>
          <Button size="md" variant="outline">
            {event.name}
          </Button>
        </Link>
      ))}
  </>
  );
}

export default Home
