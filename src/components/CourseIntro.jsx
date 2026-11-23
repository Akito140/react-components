import SectionHeading from "./SectionHeading.jsx";

export default function CourseIntro() {
  return (
    <section className="intro-section" aria-labelledby="intro-title">
      <div className="intro-copy">
        <p className="eyebrow">A tiny interactive course page</p>
        <h1 id="intro-title">Introduction to React</h1>
        <p className="intro-lead">
          React helps us build clear, interactive interfaces from small pieces
          that can be reused and combined.
        </p>
        <a className="primary-link" href="#course">Explore the components <span aria-hidden="true">↓</span></a>
      </div>
      <div className="intro-art" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="react-mark"><span>R</span></div>
        <span className="art-note note-one">props</span>
        <span className="art-note note-two">state</span>
        <span className="art-note note-three">jsx</span>
      </div>
      <p className="intro-caption">A UI made from focused, reusable parts.</p>
      <div className="intro-footer">
        <SectionHeading eyebrow="Learn by building" title="Components make ideas click." />
        <p>
          This page brings the week’s building blocks together: JSX, props,
          reusable components, and a little local state.
        </p>
      </div>
    </section>
  );
}
