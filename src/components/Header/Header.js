import React from "react";
import { Box, styled } from "@mui/system";
import { Container, TextField, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import CartButton from "../CartButton/CartButton";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 26,
    top: 26,
    border: `2px solid ${theme.palette.text.primary}`,
    padding: "0 4px",
  },
}));

const Header = (props) => {
  const { onSearch } = props;

  return (
    <>
      <Container sx={{ marginBottom: "1rem" }} maxWidth="false">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "block",
              width: { xs: "100%", sm: "auto" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography color="primary.main" variant="h4" component="h1">
              Meal Panda
            </Typography>
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              size="small"
              onChange={(e) => onSearch(e.target.value)}
              id="outlined-name"
              label="Search"
            >
              <SearchIcon></SearchIcon>
            </TextField>
          </Box>

          <CartButton />
        </Box>
      </Container>
    </>
  );
};

export default Header;
