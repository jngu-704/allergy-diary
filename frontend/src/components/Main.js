import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";

import EntryPage from "./EntryPage";

const LOCAL_STORAGE_KEY = "allergyDiary.entries";

export default function Main() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedEntries) setEntries(storedEntries);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  const handleEntryChange = (newEntries) => {
    setEntries(newEntries);
  };

  return (
    <Container className="m-auto">
      <EntryPage
        entries={entries}
        addEntry={addEntry}
        handleEntryChange={handleEntryChange}
      />
    </Container>
  );
}

// const entriesData = [
//   {
//     id: uuidv4(),
//     date: "31-03-2023",
//     temperature: 30,
//     humidity: 40,
//     allergicReaction: false,
//     symptoms: "",
//     products: [
//       {
//         id: uuidv4(),
//         time: "6:30PM",
//         name: "Burger",
//         ingredients:
//           "Bun, Beef Patty, American Cheese, Ketchup, Pickle Slices, Onions, Mustard",
//       },
//       {
//         id: uuidv4(),
//         time: "12:30PM",
//         name: "Coca-cola",
//         ingredients:
//           "Carbonated Water, Sugar, Colour (Caramel 150d), Food Acid (338), Flavour, Caffeine",
//       },
//     ],
//   },
// ];
