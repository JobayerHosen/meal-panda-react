import { useEffect, useState } from "react";

const useMeals = (search = "", category = "") => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${
        search || category === "all" ? search : category
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) setMeals(data.meals);
      });
  }, [search, category]);

  return [meals, setMeals];
};

export default useMeals;
