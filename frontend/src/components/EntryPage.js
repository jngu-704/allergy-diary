import React from "react";

import EntryForm from "./EntryForm";
import Entries from "./Entries";

export default function EntryPage({
  entries,
  addEntry,
  deleteEntry,
  handleEntryChange,
}) {
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
      <EntryForm addEntry={addEntry} deleteEntry={deleteEntry} />
      <br />
      <Entries
        entries={entries}
        deleteProduct={deleteProduct}
        toggleAllergicReaction={toggleAllergicReaction}
        deleteEntry={deleteEntry}
        addEntry={addEntry}
        handleEntryChange={handleEntryChange}
      />
    </>
  );
}
