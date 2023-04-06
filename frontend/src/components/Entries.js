import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

import { v4 as uuidv4 } from "uuid";
import EntryForm from "./EntryForm";

const LOCAL_STORAGE_KEY = "allergyDiary.entries";
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

export default function Entries() {
  const [entries, setEntries] = useState([
    {
      id: uuidv4(),
      date: "30-03-2023",
      temperature: 23,
      humidity: 50,
      allergicReaction: false,
      symptoms: "",
      products: [],
    },
  ]);
  const [product, setProduct] = useState({
    id: uuidv4(),
    time: "",
    name: "",
    ingredients: "",
  });

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

  const addProduct = (entryid) => {
    const newEntries = [...entries];
    const entryIndex = newEntries.findIndex((entry) => entry.id === entryid);
    newEntries[entryIndex].products = [
      ...newEntries[entryIndex].products,
      product,
    ];
    setEntries(newEntries);
    setProduct({
      id: uuidv4(),
      time: "",
      name: "",
      ingredients: "",
    });
  };

  const deleteProduct = (entryid, productid) => {
    const newEntries = [...entries];
    const entryIndex = newEntries.findIndex((entry) => entry.id === entryid);
    const newProducts = newEntries[entryIndex].products.filter(
      (product) => product.id !== productid
    );
    newEntries[entryIndex].products = newProducts;
    setEntries(newEntries);
  };

  return (
    <Container className="m-auto">
      <EntryForm addEntry={addEntry} />
      <br />
      {entries.map((entry) => (
        <div key={entry.id}>
          <Card>
            <Card.Header>
              Date: {entry.date}{" "}
              <Form.Check type="checkbox" label="Allergic Reaction" />
            </Card.Header>

            <ListGroup variant="flush">
              <ListGroup.Item>Temperature: {entry.temperature}</ListGroup.Item>
              <ListGroup.Item>Humidity: {entry.humidity}</ListGroup.Item>
              <ListGroup.Item>Symptoms: </ListGroup.Item>
            </ListGroup>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Product Name</th>
                  <th>Ingredients</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {entry.products.map((product) => (
                  <tr key={product.id}>
                    <th>{product.time}</th>
                    <th>{product.name}</th>
                    <th>{product.ingredients}</th>
                    <th>
                      <Button
                        variant="danger"
                        onClick={() => deleteProduct(entry.id, product.id)}
                      >
                        Remove
                      </Button>
                    </th>
                  </tr>
                ))}
                <tr>
                  <th>
                    <input
                      type="text"
                      value={product.time}
                      name="time"
                      onChange={(e) =>
                        setProduct({ ...product, time: e.target.value })
                      }
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      value={product.name}
                      name="name"
                      onChange={(e) =>
                        setProduct({ ...product, name: e.target.value })
                      }
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      value={product.ingredients}
                      name="ingredients"
                      onChange={(e) =>
                        setProduct({ ...product, ingredients: e.target.value })
                      }
                    />
                  </th>
                  <th>
                    <Button
                      variant="primary"
                      onClick={() => addProduct(entry.id)}
                    >
                      Add
                    </Button>
                  </th>
                </tr>
              </tbody>
            </Table>
          </Card>
          <br />
        </div>
      ))}
    </Container>
  );
}
