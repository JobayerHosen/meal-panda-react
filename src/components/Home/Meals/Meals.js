import { Container, Grid } from "@mui/material";
import React from "react";
import Meal from "../../Meal/Meal";

const Meals = (props) => {
  const { meals, category, addToCart } = props;

  return (
    <Container maxWidth="false">
      <Grid sx={{ mt: "5px" }} container rowSpacing={10} columnSpacing={5}>
        {!category || category === "all"
          ? meals.map((meal) => <Meal addToCart={addToCart} meal={meal}></Meal>)
          : meals
              .filter((meal) => meal.strCategory === category || meal.strMeal.includes(category))
              .map((meal) => <Meal addToCart={addToCart} meal={meal}></Meal>)}
      </Grid>
    </Container>
  );
};

export default Meals;
