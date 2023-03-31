import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import EntryForm from "./components/EntryForm";
import Entries from "./components/Entries";

const entries = [
  {
    date: "2023-03-30",
    products: [
      {
        time: "12:30PM",
        name: "Coca-cola",
        ingredients:
          "Carbonated Water, Sugar, Colour (Caramel 150d), Food Acid (338), Flavour, Caffeine",
      },
      {
        time: "6:30PM",
        name: "Burger",
        ingredients:
          "Bun, Beef Patty, American Cheese, Ketchup, Pickle Slices, Onions, Mustard",
      },
    ],
  },
  {
    date: "2023-03-31",
    products: [
      {
        time: "12:30PM",
        name: "Coca-cola",
        ingredients:
          "Carbonated Water, Sugar, Colour (Caramel 150d), Food Acid (338), Flavour, Caffeine",
      },
      {
        time: "6:30PM",
        name: "Burger",
        ingredients:
          "Bun, Beef Patty, American Cheese, Ketchup, Pickle Slices, Onions, Mustard",
      },
    ],
  },
];

function App() {
  const [diaryEntries, setDiaryEntries] = useState(entries);

  // function handleDeleteEntry(id) {

  // }

  return (
    <>
      <Header />
      <EntryForm />
      <Entries diaryEntries={diaryEntries} />
    </>
  );
}

export default App;
