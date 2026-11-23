import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

export default function LivePreview() {
  const [text, setText] = useState("");

  return (
    <section className="tool-card preview-card" aria-labelledby="preview-title">
      <SectionHeading id="preview-title" eyebrow="Controlled input" title="Live text preview" />
      <label className="input-label" htmlFor="preview-input">Write a quick note</label>
      <input
        id="preview-input"
        className="preview-input"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Type something here..."
      />
      <p className="preview-output" aria-live="polite">
        You typed: <span>{text || "…"}</span>
      </p>
    </section>
  );
}
