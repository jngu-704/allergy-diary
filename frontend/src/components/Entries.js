import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import CloseButton from "react-bootstrap/CloseButton";
import Container from "react-bootstrap/esm/Container";
import { v4 as uuidv4 } from "uuid";
import EntryForm from "./EntryForm";

const entriesData = [
  {
    id: uuidv4(),
    date: "31-03-2023",
    time: "6:30PM",
    name: "Burger",
    ingredients:
      "Bun, Beef Patty, American Cheese, Ketchup, Pickle Slices, Onions, Mustard",
  },
  {
    id: uuidv4(),
    date: "31-03-2023",
    time: "12:30PM",
    name: "Coca-cola",
    ingredients:
      "Carbonated Water, Sugar, Colour (Caramel 150d), Food Acid (338), Flavour, Caffeine",
  },

  {
    id: uuidv4(),
    date: "30-03-2023",
    time: "6:30PM",
    name: "Burger",
    ingredients:
      "Bun, Beef Patty, American Cheese, Ketchup, Pickle Slices, Onions, Mustard",
  },
  {
    id: uuidv4(),
    date: "30-03-2023",
    time: "12:30PM",
    name: "Coca-cola",
    ingredients:
      "Carbonated Water, Sugar, Colour (Caramel 150d), Food Acid (338), Flavour, Caffeine",
  },
];

export default function Entries() {
  const [entries, setEntries] = useState(entriesData);

  // useEffect(() => {}, [entries]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
    console.log(entries);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <>
      <EntryForm addEntry={addEntry} />
      <Container className="m-auto">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Product Name</th>
              <th>Ingredients</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <th>{entry.date}</th>
                <th>{entry.time}</th>
                <th>{entry.name}</th>
                <th>{entry.ingredients}</th>
                <th>
                  <CloseButton onClick={() => deleteEntry(entry.id)} />
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
//
