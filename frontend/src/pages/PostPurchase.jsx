import React from 'react';
import { Button, Stack } from "@mantine/core";
import { Link } from "react-router-dom";

function PostPurchase() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Stack>
            <h1>Thanks for Ordering!</h1>
            <Link to="/event/674225e96471f721302a0554">
                <Button>Order More</Button>
            </Link>
        </Stack>
      </div>
    );
  }
  
  export default PostPurchase;