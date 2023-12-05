import Home from "./Home";
import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/system";
import { unstable_capitalize as capitalize } from "@mui/utils";

const theme = createTheme({
  palette: {
    color1: {
      main: "#FFFFFF",
    },
    color2: {
      main: "#537DE6",
    },
    color3: {
      main: "#E8C015",
    },
    color4: {
      main: "#F41D97",
    },
    color5: {
      main: "#a200ff",
    },
  },
});

function App() {
  const title = "Welcome to the new game!";
  const author = "Code by 林萬荃";
  const [category, setCategory] = useState("");
  const handleClick = (e) => {
    setCategory(e.target.textContent);
    console.log(category);
  };
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#8DC82D",
        height: "100vh",
      }}
    >
      <Stack className="Menu" direction="row" gap={4}>
        <div className="content">
          <Stack direction="column" gap={3}>
            <h1>EcoTerms</h1>
            <p>{title}</p>
            <p>{author}</p>
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="color1" onClick={handleClick}>
                {capitalize("Individual")}
              </Button>
              <Button variant="contained" color="color2" onClick={handleClick}>
                Population
              </Button>
              <Button variant="contained" color="color3" onClick={handleClick}>
                Community
              </Button>
              <Button variant="contained" color="color4" onClick={handleClick}>
                Ecosystem
              </Button>
              <Button variant="contained" color="color5" onClick={handleClick}>
                Biosphere
              </Button>
            </ThemeProvider>
          </Stack>
        </div>
        <Home category={category} />
      </Stack>
    </div>
  );
}

export default App;
