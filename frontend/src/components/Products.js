import React from "react";
import Button from "react-bootstrap/Button";

export default function Products({ entry, deleteProduct }) {
  return entry.products.map((product) => (
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
  ));
}
