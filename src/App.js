import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useState } from "react";
import * as themes from "./utilities/themes";
import { Box } from "@mui/system";

export const cartContext = createContext({});

function App() {
  const [searching, setSearching] = useState();
  const [theme, setTheme] = useState(themes.dark);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (meal) => {
    const newCart = [...cart, meal];
    setCart(newCart);
  };

  const handleSearch = (value) => {
    setSearching(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <cartContext.Provider value={{ cart, handleAddToCart }}>
        <Box bgcolor="background.default" className="App">
          <Router>
            <Header onSearch={handleSearch}></Header>
            <Switch>
              <Route exact path="/">
                <Home searching={searching}></Home>
              </Route>
              <Route path="/:category">
                <Home searching={searching}></Home>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </Box>
      </cartContext.Provider>
    </ThemeProvider>
  );
}
export default App;
