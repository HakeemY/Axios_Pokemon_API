import "./App.css";
import { useState } from "react";
import FetchPoke from "./components/FetchPoke";
import ViewPoke from "./components/ViewPoke";

function App() {
  const [poke, setPoke] = useState([]);
  console.log(`mon app: ${poke}`);

  return (
    <>
      <FetchPoke poke={poke} setPoke={setPoke} />
      <ViewPoke poke={poke} />
    </>
  );
}

export default App;
