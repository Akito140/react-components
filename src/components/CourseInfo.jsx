import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

export default function CourseInfo({ courseName }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="tool-card course-info-card" aria-labelledby="course-info-title">
      <SectionHeading id="course-info-title" eyebrow="Props + conditional UI" title="Course notes" />
      <p className="course-name">{courseName}</p>
      <button
        className="text-button"
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        {isExpanded ? "Hide details" : "Show details"}
        <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
      </button>
      {isExpanded && (
        <p className="course-details">
          We practice composing function components, passing information through
          props, and using state to respond to events.
        </p>
      )}
    </section>
  );
}
