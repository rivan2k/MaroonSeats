import React from 'react';
import { Container, Grid, Text, Button, Image } from '@mantine/core';

function Home() {
  return (
    // <div>
    //   <Stack align='center'>
    //     <Title>Log-in</Title>
    //     <TextInput 
    //       placeholder='Username' 
    //       style={{ width: '250px' }}
    //     />
    //     <PasswordInput 
    //       placeholder='Password' 
    //       style={{ width: '250px' }}
    //     />
    //   </Stack>
    // </div>
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

      {/* cards or something showing like recent events? */}
      
    </Container>
  );
}

export default Home
