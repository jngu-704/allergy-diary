import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function EntryForm({ addEntry }) {
  const [entry, setEntry] = useState({
    id: uuidv4(),
    date: new Date(),
    temperature: "",
    humidity: "",
    allergicReaction: false,
    symptoms: "",
    products: [],
  });

  const handleAddEntry = (e) => {
    e.preventDefault();
    addEntry(entry);
    setEntry({
      id: uuidv4(),
      date: new Date(),
      temperature: "",
      humidity: "",
      allergicReaction: false,
      symptoms: "",
      products: [],
    });
  };

  return (
    <Card>
      <Card.Header>
        <b>Create New Entry</b>
      </Card.Header>
      <Form className="m-3" onSubmit={(e) => handleAddEntry(e)}>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            name="date"
            type="date"
            value={entry.date}
            onChange={(e) => setEntry({ ...entry, date: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mt-3 mb-3" controlId="formBasicTemperature">
          <Form.Label>Temperature</Form.Label>
          <Form.Control
            name="temperature"
            type="number"
            value={entry.temperature}
            onChange={(e) =>
              setEntry({ ...entry, temperature: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mt-3 mb-3" controlId="formBasicHumidity">
          <Form.Label>Humidity</Form.Label>
          <Form.Control
            name="humidity"
            type="number"
            value={entry.humidity}
            onChange={(e) => setEntry({ ...entry, humidity: e.target.value })}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleAddEntry(e)}
        >
          Add Entry
        </Button>
      </Form>
    </Card>
  );
}
