import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ProductForm({ entry, entries, handleEntryChange }) {
  const [product, setProduct] = useState({
    id: uuidv4(),
    time: "",
    name: "",
    ingredients: "",
  });

  const addProduct = (entryid) => {
    const newEntries = [...entries];
    const entryIndex = newEntries.findIndex((entry) => entry.id === entryid);
    newEntries[entryIndex].products = [
      ...newEntries[entryIndex].products,
      product,
    ];
    handleEntryChange(newEntries);
    setProduct({
      id: uuidv4(),
      time: "",
      name: "",
      ingredients: "",
    });
  };

  return (
    <tr>
      <th>
        <Form.Control
          name="time"
          type="text"
          value={product.time}
          onChange={(e) => setProduct({ ...product, time: e.target.value })}
        />
      </th>
      <th>
        <Form.Control
          name="name"
          type="text"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
      </th>
      <th>
        <Form.Control
          name="ingredients"
          as="textarea"
          value={product.ingredients}
          onChange={(e) =>
            setProduct({ ...product, ingredients: e.target.value })
          }
        />
      </th>
      <th>
        <Button
          variant="primary"
          type="submit"
          onClick={() => addProduct(entry.id)}
        >
          Add
        </Button>
      </th>
    </tr>
  );
}
