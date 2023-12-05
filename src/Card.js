import React, { useState, useEffect } from "react";
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: 50,
};
theme.typography.h2 = {
  fontSize: 30,
};
theme.typography.link = {
  fontSize: 10,
};
const Card = ({ cards, Data }) => {
  var jsonObj = Data;
  console.log(jsonObj);
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const handleSummit = (e) => {
    e.preventDefault();
    if (answer.toLocaleLowerCase() === cards.answer.toLocaleLowerCase()) {
      alert("Correct!");
      setShow(true);
      delete jsonObj[cards.id];
      console.log(jsonObj);
    } else {
      alert("Wrong!");
    }
  };
  const seeAnswer = () => {
    console.log("see answer");
    setAnswer(cards.answer);
    setShow(true);
    Object.keys(jsonObj).forEach(function (key) {
      if (jsonObj[key].answer === cards.answer) {
        delete jsonObj[key];
        console.log("deleted");
      }
    });
    console.log(jsonObj);
  };
  useEffect(() => {
    setShow(false);
  }, [cards]);

  return (
    <div className="card-list">
      <Stack
        direction="column"
        spacing={2}
        divider={<Divider orientation="horizontal" />}
      >
        <ThemeProvider theme={theme}>
          <Stack
            direction="column"
            spacing={2}
            divider={<Divider orientation="horizontal" />}
          >
            <Typography variant="h2">
              {cards.category} +{cards.point} Points
            </Typography>
            <Typography variant="h2">{cards.definition}</Typography>
          </Stack>
        </ThemeProvider>

        <Stack direction="row">
          <Stack direction="column" spacing={2}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              required
              onSubmit={handleSummit}
            >
              <TextField
                id="outlined-basic"
                label="Answer"
                variant="outlined"
                onChange={(e) => setAnswer(e.target.value)}
              />
            </Box>

            {show ? (
              <ThemeProvider theme={theme}>
                <Typography variant="h3">{cards.answer}</Typography>
              </ThemeProvider>
            ) : null}
            <Button variant="contained" onClick={() => seeAnswer()}>
              See answer
            </Button>
          </Stack>
          {show ? (
            <Stack direction="column" spacing={2}>
              <img src={cards.img} width="500" alt="OKOK" />
              <Link
                href={cards.img}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                {cards.img}
              </Link>
            </Stack>
          ) : null}
        </Stack>
      </Stack>
    </div>
  );
};

export default Card;
