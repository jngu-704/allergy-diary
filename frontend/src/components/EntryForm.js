import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

export default function EntryForm() {
  return (
    <Container className="m-auto">
      <Form className="m-3">
        <Form.Group className="mb-3" controlId="formBasicEntry">
          <Form.Label>Time</Form.Label>
          <Form.Control className="mb-3" type="time" />
          <Form.Label>Product Name</Form.Label>
          <Form.Control className="mb-3" type="text" />
          <Form.Label>Ingredients</Form.Label>
          <Form.Control className="mb-3" as="textarea" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add to entry
        </Button>
      </Form>
    </Container>
  );
}
