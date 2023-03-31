import "./App.css";
import Container from "react-bootstrap/esm/Container";

import Header from "./components/Header";
import Entries from "./components/Entries";

function App() {
  return (
    <>
      <Header />
      <Entries />
    </>
  );
}

export default App;
