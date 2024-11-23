import React from 'react';
import { Link } from 'react-router-dom';  
import { Grid, Button, rem,  Card, Image, Text, Badge, Group  } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Home() {
  const events = [
    { id: "67425b6f473fceb7a6cd3593", name: "Texas A&M vs. UT Austin" },
    { id: "67425b94473fceb7a6cd3595", name: "Texas A&M vs. Wake Forest" },
    { id: "67425be4473fceb7a6cd3597", name: "Texas A&M vs. LSU" },
  ];
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;
  return (
    <>
      {/* <div>
        <Container py="xl" style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
          <Text size="xl" weight={700}>
            Find Your Next Event
          </Text>
          <Text size="lg" mt="md" color="dimmed">
            Your gateway to unforgettable experiences starts here.
          </Text>
          <Button
            mt="lg"
            size="md"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Browse Events
          </Button>
        </Container>
      </div> */}

      <Grid justify="center" align="stretch">
        <Grid.Col span={3} style={{ minHeight: rem(80) }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDaqiK9RBHU-v09BvYE4PtYqSkyNnDkg_43w&s"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Texas A&M vs UT Austin</Text>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <Badge color="pink">Football</Badge>
                <Badge color="blue">Men's Sports</Badge>
                <Badge color="red">11/27/2024</Badge>
              </div>
            </Group>

            <Text size="sm" c="dimmed">
              The biggest rivalry in Texas football is back! 
              Texas A&M faces off against UT Austin tomorrow in a showdown that promises intensity, pride, and plenty of action. 
              Who will come out on top in this heated battle for supremacy?
            </Text>
            <Link to="/event/67425b6f473fceb7a6cd3593" style={{ textDecoration: 'none' }}>
              <Button color="blue" fullWidth mt="md" radius="md" variant="gradient" gradient={{ from: '#CC5500', to: '#700000' }}>
                Get Tickets Now
              </Button>
            </Link>
          </Card>
        </Grid.Col>
        <Grid.Col span={3} style={{ minHeight: rem(120) }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNr2-rSffiuvFCs15mly7otCGBX4Eic6ATg&s"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Texas A&M vs Wake Forest</Text>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <Badge color="pink">Basketball</Badge>
                <Badge color="blue">Men's Sports</Badge>
                <Badge color="red">12/03/2024</Badge>
              </div>
            </Group>

            <Text size="sm" c="dimmed">
              Texas A&M takes on Wake Forest tomorrow, with the Aggies looking to build on their strong defense and depth. 
              Wake Forest, led by Tyree Appleby, aims to showcase their high-powered offense in this exciting matchup.
            </Text>
            <Link to="/event/67425b94473fceb7a6cd3595" style={{ textDecoration: 'none' }}>
              <Button color="blue" fullWidth mt="md" radius="md" variant="gradient" gradient={{ from: '#cfb53b', to: '#700000' }}>
                Get Tickets Now
              </Button>
            </Link>
          </Card>
        </Grid.Col>
        <Grid.Col span={3}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://artwork.espncdn.com/programs/cc8fcbfe-7da2-42c9-8ab2-b709ce71d2e8/16x9/1280x720_20210520172437.jpg"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Texas A&M vs LSU</Text>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <Badge color="pink">Volleyball</Badge>
                <Badge color="blue">Women's Sports</Badge>
                <Badge color="red">11/24/2024</Badge>
              </div>
            </Group>

            <Text size="sm" c="dimmed">
            Texas A&M faces LSU tomorrow in a high-stakes women's volleyball showdown. 
            With Aggies standout Mallory Talbert leading the charge at the net and LSU's strong defense anchored by Madie Jones, 
            this matchup is set to be a fierce battle for supremacy.
            </Text>
            <Link to="/event/67425be4473fceb7a6cd3597" style={{ textDecoration: 'none' }}>
              <Button color="blue" fullWidth mt="md" radius="md" variant="gradient" gradient={{ from: '#461D7C', to: '#700000' }}>
                Get Tickets Now
              </Button>
            </Link>
          </Card>
        </Grid.Col>
    </Grid>
  </>
  );
}

export default Home
