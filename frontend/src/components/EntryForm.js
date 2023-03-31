import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

export default function EntryForm({ addEntry }) {
  const [entry, setEntry] = useState({
    id: uuidv4(),
    date: "",
    time: "",
    name: "",
    ingredients: "",
  });

  const handleAddEntry = (e) => {
    e.preventDefault();
    addEntry(entry);
  };

  return (
    <Container className="m-auto">
      <Form className="m-3">
        <Form.Group className="mb-3" controlId="formBasicEntry">
          <Form.Label>Date</Form.Label>
          <Form.Control
            className="mb-3"
            type="text"
            value={entry.date}
            onChange={(e) => setEntry({ ...entry, date: e.target.value })}
          />
          <Form.Label>Time</Form.Label>
          <Form.Control
            className="mb-3"
            type="text"
            value={entry.time}
            onChange={(e) => setEntry({ ...entry, time: e.target.value })}
          />
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            className="mb-3"
            type="text"
            value={entry.name}
            onChange={(e) => setEntry({ ...entry, name: e.target.value })}
          />
          <Form.Label>Ingredients</Form.Label>
          <Form.Control
            className="mb-3"
            as="textarea"
            value={entry.ingredients}
            onChange={(e) =>
              setEntry({ ...entry, ingredients: e.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleAddEntry}>
          Add Entry
        </Button>
      </Form>
    </Container>
  );
}
