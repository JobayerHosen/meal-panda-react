import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useState } from "react";
import * as themes from "./utilities/themes";
import { Box } from "@mui/system";
import { CartContext } from "./context/CartContext";

function App() {
  const [searching, setSearching] = useState();
  const [theme, setTheme] = useState(themes.dark);
  const [cart, setCart] = useState([]);

  const handleSearch = (value) => {
    setSearching(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={[cart, setCart]}>
        <Box bgcolor="background.default" className="App">
          <Router>
            <Header onSearch={handleSearch}></Header>
            <Switch>
              <Route path="/shop/:category">
                <Home searching={searching}></Home>
              </Route>
              <Route exact path="/shop">
                <Home searching={searching}></Home>
              </Route>
              <Route exact path="/">
                <Home searching={searching}></Home>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </Box>
      </CartContext.Provider>
    </ThemeProvider>
  );
}
export default App;
