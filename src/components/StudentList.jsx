import StudentCard from "./StudentCard.jsx";

export default function StudentList({ students }) {
  if (students.length === 0) {
    return <p className="empty-state">No students match this filter yet.</p>;
  }

  return (
    <div className="student-grid">
      {students.map((student) => (
        <StudentCard key={student.id} {...student} />
      ))}
    </div>
  );
}
