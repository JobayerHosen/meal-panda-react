import React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const NotFound = () => {
  return (
    <div>
      <Container maxWidth="md">
        <img src="/2456050.svg"></img>
        <Typography variant="h4" color="text.primary" component="div" gutterBottom>
          Page Not Found
        </Typography>
      </Container>
    </div>
  );
};

export default NotFound;
