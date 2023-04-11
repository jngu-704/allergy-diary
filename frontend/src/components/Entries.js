import React from "react";

import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import Stack from "react-bootstrap/Stack";
import ProductForm from "./ProductForm";
import Products from "./Products";

export default function Entries({
  entries,
  handleEntryChange,
  toggleAllergicReaction,
  deleteEntry,
  deleteProduct,
}) {
  return entries.map((entry) => (
    <div key={entry.id}>
      <Card>
        <Card.Header>
          <Stack direction="horizontal" gap={3}>
            <b>{entry.date}</b>
            <Form.Check
              reverse
              type="checkbox"
              label="Allergic Reaction"
              checked={entry.allergicReaction}
              onChange={() => toggleAllergicReaction(entry.id)}
            />
            <div className="ms-auto">
              <CloseButton onClick={() => deleteEntry(entry.id)}></CloseButton>
            </div>
          </Stack>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Temperature: {entry.temperature}°C</ListGroup.Item>
          <ListGroup.Item>Humidity: {entry.humidity}%</ListGroup.Item>

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
            <Products entry={entry} deleteProduct={deleteProduct} />
            <ProductForm
              entry={entry}
              entries={entries}
              handleEntryChange={handleEntryChange}
            />
          </tbody>
        </Table>
      </Card>
      <br />
    </div>
  ));
}
