import React from "react";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

import EntryForm from "./EntryForm";
import ProductForm from "./ProductForm";

export default function EntryPage({ entries, addEntry, handleEntryChange }) {
  const deleteProduct = (entryid, productid) => {
    const newEntries = [...entries];
    const entryIndex = newEntries.findIndex((entry) => entry.id === entryid);
    const newProducts = newEntries[entryIndex].products.filter(
      (product) => product.id !== productid
    );
    newEntries[entryIndex].products = newProducts;
    handleEntryChange(newEntries);
  };

  const toggleAllergicReaction = (entryid) => {
    const newEntries = [...entries];
    const entryIndex = newEntries.findIndex((entry) => entry.id === entryid);
    newEntries[entryIndex].allergicReaction =
      !newEntries[entryIndex].allergicReaction;
    handleEntryChange(newEntries);
  };

  return (
    <>
      <EntryForm addEntry={addEntry} />
      <br />
      {entries.map((entry) => (
        <div key={entry.id}>
          <Card>
            <Card.Header>
              Date: {entry.date}
              <Form.Check
                type="checkbox"
                label="Allergic Reaction"
                checked={entry.allergicReaction}
                onChange={() => toggleAllergicReaction(entry.id)}
              />
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Temperature: {entry.temperature}°C
              </ListGroup.Item>
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
      ))}
    </>
  );
}
