import { Button, Grid } from "@mui/material";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import addToCart from "../../lib/addToCart";
import { CartContext } from "../../context/CartContext";

const Meal = (props) => {
  const { meal } = props;

  const [cart, setCart] = useContext(CartContext);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column" },
          alignItems: "center",
          bgcolor: "background.paper",
          color: "text.primary",
          overflow: "visible",
          borderRadius: "12px",
          boxShadow: 1,
          fontWeight: "bold",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 200,
            width: 200,
            maxHeight: { xs: 200, md: 200 },
            maxWidth: { xs: 200, md: 200 },
            borderRadius: "50%",
            mt: "-50px",
          }}
          alt="The house from the offer."
          src={meal.strMealThumb}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center" },
            m: 3,
            minWidth: { md: 350 },
          }}
        >
          <Box component="span" sx={{ color: "secondary.main", fontSize: 26 }}>
            {meal.strMeal}
          </Box>
          <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
            Category: {meal.strCategory}
          </Box>
          <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
            Area: {meal.strArea}
          </Box>
          <Box component="span" sx={{ fontSize: 26, mt: 1 }}>
            Price: $ {236}
          </Box>
          <Button
            onClick={() => addToCart(cart, setCart, meal.idMeal)}
            variant="contained"
            color="primary"
            sx={{
              mt: 1.5,
              p: 1,
              fontWeight: "medium",
              display: "flex",
              fontSize: 12,
              "& svg": {
                fontSize: 21,
                mr: 0.5,
              },
            }}
          >
            <ShoppingCartOutlinedIcon />
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Meal;
