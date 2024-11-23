import React from 'react';
import { CloseButton, Stack, TextInput, Button } from "@mantine/core";
import { Link } from "react-router-dom";

function ManagerAdd() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Stack align='center'>
          <Link to="/manager_view" style={{position: "absolute", top: "100px", right: "100px"}}>
            <CloseButton/>
          </Link>
          <TextInput
            placeholder='Price' 
            style={{ width: '250px', justifyContent: "center"}}
          />
          <TextInput
            placeholder='Section' 
            style={{ width: '250px', justifyContent: "center"}}
          />
          <TextInput
            placeholder='# of Tickets' 
            style={{ width: '250px', justifyContent: "center"}}
          />
          <Link to="/manager_view">
            <Button>Finalize</Button>
          </Link>
        </Stack>
      </div>
    );
  }
  
  
  export default ManagerAdd;