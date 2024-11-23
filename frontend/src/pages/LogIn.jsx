import classes from './Pages.module.css';
import { Title, PasswordInput, Stack, TextInput } from '@mantine/core';
import { IconCornerDownRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <div className={classes.container}>
      <Stack align='center'>
        <Title>Log-in</Title>
        <TextInput 
          placeholder='Username' 
          style={{ width: '250px' }}
        />
        <PasswordInput 
          placeholder='Password' 
          style={{ width: '250px' }}
        />
        <Link to="/ManagerTickets"> {/*needs to be changed to the manager homepage*/}
          <IconCornerDownRight size={24}></IconCornerDownRight>
        </Link>
      </Stack>
    </div>
  );
}

export default LogIn