import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="tool-card counter-card" aria-labelledby="counter-title">
      <SectionHeading id="counter-title" eyebrow="State exercise" title="A little counter" />
      <p className="tool-description">State changes trigger a fresh render.</p>
      <div className="counter-controls">
        <button
          className="round-button"
          type="button"
          aria-label="Decrease counter"
          onClick={() => setCount((current) => current - 1)}
        >
          −
        </button>
        <output className="counter-value" aria-live="polite" aria-label="Counter value">
          {count}
        </output>
        <button
          className="round-button button-dark"
          type="button"
          aria-label="Increase counter"
          onClick={() => setCount((current) => current + 1)}
        >
          +
        </button>
      </div>
      <p className="counter-note">Try both buttons — the number is React state.</p>
    </section>
  );
}
