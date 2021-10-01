import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#EA7C69",
        contrastText: "#fff",
      },
      secondary: {
        main: "#9288E0",
        contrastText: "#fff",
      },
      dark: {
        main: "#252836",
        contrastText: "#fff",
      },
      background: {
        paper: "#1f1d2b",
        default: "#252836",
      },
    },
  });

  const [searching, setSearching] = useState();

  const handleSearch = (value) => {
    setSearching(value);
    console.log(searching);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>
  );
}
export default App;
