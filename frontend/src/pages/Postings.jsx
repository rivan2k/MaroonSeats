import classes from './Pages.module.css';
import { Title, Stack } from '@mantine/core';

function Postings() {
  return (
    <div className={classes.container}>
      <Stack align='center'>
        <Title>Postings</Title>
      </Stack>
      
    </div>
  )
}

export default Postings