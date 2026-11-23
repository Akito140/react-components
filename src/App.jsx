import { useState } from "react";
import CourseInfo from "./components/CourseInfo.jsx";
import CourseIntro from "./components/CourseIntro.jsx";
import Counter from "./components/Counter.jsx";
import HighlightBox from "./components/HighlightBox.jsx";
import LivePreview from "./components/LivePreview.jsx";
import PageHeader from "./components/PageHeader.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import StudentFilter from "./components/StudentFilter.jsx";
import StudentList from "./components/StudentList.jsx";
import { filterStudents, students } from "./data/students.js";

function App() {
  const [studentFilter, setStudentFilter] = useState("all");
  const visibleStudents = filterStudents(students, studentFilter);

  return (
    <div id="top" className="app-shell">
      <PageHeader />
      <main>
        <CourseIntro />

        <section id="course" className="course-section page-section">
          <div className="course-section-copy">
            <SectionHeading
              eyebrow="The building blocks"
              title="Small pieces. One thoughtful page."
              description="A few focused components can work together to explain an idea, show a state change, and make a page feel alive."
            />
            <HighlightBox label="The React idea">
              Describe the interface for the current state; let React update
              the screen when that state changes.
            </HighlightBox>
          </div>
          <div className="feature-grid">
            <article className="feature-card feature-lilac">
              <span className="feature-number">01</span>
              <h3>Compose</h3>
              <p>Put small, reusable components together to make a bigger view.</p>
            </article>
            <article className="feature-card feature-peach">
              <span className="feature-number">02</span>
              <h3>Pass props</h3>
              <p>Give each component the information it needs from its parent.</p>
            </article>
            <article className="feature-card feature-green">
              <span className="feature-number">03</span>
              <h3>Update state</h3>
              <p>Respond to events and let React render the updated interface.</p>
            </article>
          </div>
        </section>

        <section id="students" className="students-section page-section">
          <div className="students-heading-row">
            <SectionHeading
              eyebrow="Props + lists"
              title="A class full of ideas."
              description="Each card receives its own props. The list is rendered from data with a stable key."
            />
            <StudentFilter value={studentFilter} onChange={setStudentFilter} />
          </div>
          <StudentList students={visibleStudents} />
          <p className="result-count" aria-live="polite">
            Showing {visibleStudents.length} of {students.length} students
          </p>
        </section>

        <section className="playground-section page-section">
          <div className="playground-heading">
            <SectionHeading
              eyebrow="State + events"
              title="The interactive corner."
              description="These small exercises use useState, click events, and a controlled input."
            />
          </div>
          <div className="tools-grid">
            <Counter />
            <CourseInfo courseName="React Components · Week 9" />
            <LivePreview />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>student studio</span>
        </a>
        <p>Built one component at a time · {new Date().getFullYear()}</p>
        <a className="back-to-top" href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
