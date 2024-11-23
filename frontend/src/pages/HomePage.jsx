import React from 'react';
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
      <Grid cols={2} spacing="md" mt="xl">
          <Button size="md" variant="outline">
            Temp 1
          </Button>
          <Button size="md" variant="outline">
            Temp 2
          </Button>
          <Button size="md" variant="outline">
            Temp 3
          </Button>
          <Button size="md" variant="outline">
            Temp 4
          </Button>
        </Grid>
    </>
  );
}

export default Home
