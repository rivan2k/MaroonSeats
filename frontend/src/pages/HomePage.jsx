import React from 'react';
import { Link } from 'react-router-dom';  
import { Container, Grid, Text, Button, Image } from '@mantine/core';

function Home() {
  return (
    <>
      <Container py="xl" style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        {/* Hero Text */}
        <Text size="xl" weight={700}>
          Find Your Next Event
        </Text>
        <Text size="lg" mt="md" color="dimmed">
          Your gateway to unforgettable experiences starts here.
        </Text>
        <Button mt="lg" size="md" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
          Browse Tickets
        </Button>
      </Container>
      <Link to = "/event">
        <Button size="md" variant="outline">
          Event 1
        </Button>
      </Link>
  </>
  );
}

export default Home
