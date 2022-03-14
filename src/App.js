import "./styles.css";
import { useState } from "react";
import ParagraphSelector from "./ParagraphSelector";
import ParagraphList from "./ParagraphList";

export default function App() {
  const [selectedNum, setSelectedNum] = useState(1);

  return (
    <section className="App">
      <h1>Project 4 Assessent Prep</h1>
      <ParagraphSelector
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}
      />
      <ParagraphList
        selectedNum={selectedNum}
        setSelectedNum={setSelectedNum}
      />
    </section>
  );
}
