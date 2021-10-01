import BasicTabs from "../BasicTabs/BasicTabs";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Meals from "./Meals/Meals";

const Home = (props) => {
  const { category } = useParams();
  const [categories, setCategories] = useState(["all"]);
  const [meals, setMeals] = useState([]);
  const { searching, addToCart } = props;
  const [cart, setCart] = useState([]);

  // get all category list
  useEffect(() => {
    //{"meals":[{"strCategory":"Beef"},{"strCategory":"Seafood"},...]}
    fetch("https://themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then(({ meals }) => {
        const newCat = meals.map((meal) => meal.strCategory);
        setCategories(["all", ...newCat]);
      });
  }, []);

  // fetch data according to url or search text
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${
        searching ? searching : !category || category === "all" ? "" : category
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) setMeals(data.meals);
      });
  }, [searching, category]);

  const handelAddToCart = (meal) => {
    const newCart = [...cart, meal];
    setCart(newCart);
    console.log(cart);
  };

  return (
    <div>
      <Box sx={{ mb: "2rem" }}>
        <BasicTabs categories={categories}></BasicTabs>
      </Box>

      <Meals addToCart={handelAddToCart} meals={meals} category={category}></Meals>
    </div>
  );
};

export default Home;
