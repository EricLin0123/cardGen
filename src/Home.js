import { useState, useEffect } from "react";
import React from "react";
import Card from "./Card";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import cards_db from "./db.json";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const Home = ({ category }) => {
  const [cards, setCards] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [Data, setData] = useState([]);
  const [catNow, setCatNow] = useState([]);

  // useEffect(() => {
  //   // command to run json server
  //   // npx json-server --watch data/db.json --port 8000
  //   fetch("http://localhost:8000/cards")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //       setCards(data[0]);
  //       setIsPending(false);
  //     });
  // }, []);
  useEffect(() => {
    setData(cards_db);
  }, [cards_db]);

  useEffect(() => {
    console.log("category", category);
    if (Data.length !== 0) {
      setCatNow(
        Data.filter(
          (item) =>
            item.category.toLocaleLowerCase() === category.toLocaleLowerCase()
        )
      );
    }
  }, [category, Data]);

  return (
    <div className="Home">
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={() => setCards(catNow[getRandomInt(catNow.length)])}
        >
          Shuffle
        </Button>

        <h1>{category}</h1>
      </Stack>

      {isPending && <div>Loading...</div>}
      {cards && <Card cards={cards} Data={Data} />}
    </div>
  );
};

export default Home;
