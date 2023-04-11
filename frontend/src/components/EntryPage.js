import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import EntryForm from "./EntryForm";
import Entries from "./Entries";

export default function EntryPage({
  entries,
  addEntry,
  deleteEntry,
  handleEntryChange,
}) {
  const [allergicReactionFilterToggle, setAllergicReactionFilterToggle] =
    useState(true);

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

  const EntriesWithAllergicReaction = () => {
    const filteredEntries = entries.filter(
      (entry) => entry.allergicReaction === true
    );

    return (
      <Entries
        entries={filteredEntries}
        deleteEntry={deleteEntry}
        handleEntryChange={handleEntryChange}
        deleteProduct={deleteProduct}
        toggleAllergicReaction={toggleAllergicReaction}
      />
    );
  };

  const AllEntries = () => {
    return (
      <Entries
        entries={entries}
        deleteEntry={deleteEntry}
        handleEntryChange={handleEntryChange}
        deleteProduct={deleteProduct}
        toggleAllergicReaction={toggleAllergicReaction}
      />
    );
  };

  const ListEntries = () => {
    if (allergicReactionFilterToggle) return <EntriesWithAllergicReaction />;
    else return <AllEntries />;
  };

  return (
    <>
      <EntryForm addEntry={addEntry} deleteEntry={deleteEntry} />
      <br />
      <h2>Filter</h2>
      <Form.Check
        type="checkbox"
        label="Allergic Reaction"
        checked={allergicReactionFilterToggle}
        onChange={() =>
          setAllergicReactionFilterToggle(!allergicReactionFilterToggle)
        }
      />
      <br />
      <ListEntries />
    </>
  );
}
