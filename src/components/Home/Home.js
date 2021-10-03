import BasicTabs from "../BasicTabs/BasicTabs";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Meals from "../Meals/Meals";
import useMeals from "../../hooks/useMeals";

const Home = (props) => {
  const { category } = useParams();
  const [categories, setCategories] = useState(["all"]);
  const { searching } = props;

  // fetch data according to url or search text
  const [meals, setMeals] = useMeals(searching, category);

  // get all category list
  useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then(({ meals }) => {
        const newCat = meals.map((meal) => meal.strCategory);
        setCategories(["all", ...newCat]);
      });
  }, []);

  return (
    <div>
      <Box sx={{ mb: "2rem" }}>
        <BasicTabs categories={categories}></BasicTabs>
      </Box>

      <Meals meals={meals} category={category}></Meals>
    </div>
  );
};

export default Home;
