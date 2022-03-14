import "./styles.css";

export default function ParagraphSelector({ selectedNum, setSelectedNum }) {
  return (
    <>
      <h3>Paragraph Selector</h3>
      <section className="ParagraphSelector">
        <button
          className={selectedNum === 1 ? "selected" : ""}
          onClick={() => setSelectedNum(1)}
        >
          1 {selectedNum === 1 && "(SELECTED)"}
        </button>
        <button
          className={selectedNum === 2 ? "selected" : ""}
          onClick={() => setSelectedNum(2)}
        >
          2 {selectedNum === 2 && "(SELECTED)"}
        </button>
        <button
          className={selectedNum === 3 ? "selected" : ""}
          onClick={() => setSelectedNum(3)}
        >
          3 {selectedNum === 3 && "(SELECTED)"}
        </button>
      </section>
    </>
  );
}
