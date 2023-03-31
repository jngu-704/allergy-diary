import React from "react";
import Table from "react-bootstrap/Table";
import CloseButton from "react-bootstrap/CloseButton";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/esm/Container";

export default function Entries({ diaryEntries }) {
  const listEntries = diaryEntries.map((entry) => {
    const listProducts = entry.products.map((product) => (
      <tr>
        <td>{product.time}</td>
        <td>{product.name}</td>
        <td>{product.ingredients}</td>
        <td className="align-items-center">
          <CloseButton />
        </td>
      </tr>
    ));
    return (
      <Container className="m-auto">
        <ListGroup.Item key={entry.date}>
          {entry.date}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Time</th>
                <th>Product Name</th>
                <th>Ingredients</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{listProducts}</tbody>
          </Table>
        </ListGroup.Item>
      </Container>
    );
  });

  return <ListGroup>{listEntries}</ListGroup>;
}
