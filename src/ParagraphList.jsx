import "./styles.css";

export default function ParagraphList({ selectedNum, setSelectedNum }) {
  return (
    <>
      <section className="ParagraphList">
        <h3>Paragraph List</h3>
        <p className={selectedNum === 1 ? "selected" : ""}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus
          quos ex nemo, magni iure eos deserunt exercitationem odit. Accusantium
          enim repudiandae debitis numquam assumenda at, consequuntur sunt
          dignissimos temporibus!{" "}
        </p>
        <p className={selectedNum === 2 ? "selected" : ""}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus
          quos ex nemo, magni iure eos deserunt exercitationem odit. Accusantium
          enim repudiandae debitis numquam assumenda at, consequuntur sunt
          dignissimos temporibus!{" "}
        </p>
        <p className={selectedNum === 3 ? "selected" : ""}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusamus
          quos ex nemo, magni iure eos deserunt exercitationem odit. Accusantium
          enim repudiandae debitis numquam assumenda at, consequuntur sunt
          dignissimos temporibus!{" "}
        </p>
      </section>
    </>
  );
}
