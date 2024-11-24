import React from "react";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "./Pages.module.css"; 
function ThankYouPage() {
  const navigate = useNavigate();  

  const handleOrderMoreClick = () => {
    navigate(-1);  
  };

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2>Thank you for your purchase!</h2>
      </div>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p>Your order has been successfully processed.</p>
      </div>

      <div style={{ textAlign: "center" }}>
        <Button variant="filled" onClick={handleOrderMoreClick}>
          Order More
        </Button>
      </div>
    </>


  );
}

export default ThankYouPage;
