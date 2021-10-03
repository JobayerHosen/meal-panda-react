import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import Meal from "../Meal/Meal";

const Meals = (props) => {
  const { meals, category } = props;

  return (
    <Container maxWidth="xl">
      {!meals.length ? (
        <Box>
          <img src="/2426350.svg"></img>
          <Typography variant="h4" color="text.primary" component="div" gutterBottom>
            No Search Result
          </Typography>
        </Box>
      ) : (
        <Grid sx={{ mt: "5px" }} container rowSpacing={10} columnSpacing={5}>
          {!category || category === "all"
            ? meals.map((meal) => <Meal key={meal.idMeal} meal={meal}></Meal>)
            : meals
                .filter((meal) => meal.strCategory === category || meal.strMeal.includes(category))
                .map((meal) => <Meal key={meal.idMeal} meal={meal}></Meal>)}
        </Grid>
      )}
    </Container>
  );
};

export default Meals;
