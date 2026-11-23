export const students = [
  {
    id: "aida-uulu",
    name: "Aida Uulu",
    group: "SE-101",
    favoriteSubject: "User interface design",
    track: "Frontend",
    isActive: true,
  },
  {
    id: "nurlan-asanov",
    name: "Nurlan Asanov",
    group: "SE-102",
    favoriteSubject: "JavaScript",
    track: "Frontend",
    isActive: true,
  },
  {
    id: "amira-sadykova",
    name: "Amira Sadykova",
    group: "SE-103",
    favoriteSubject: "Data structures",
    track: "Backend",
    isActive: false,
  },
  {
    id: "timur-bekov",
    name: "Timur Bekov",
    group: "SE-101",
    favoriteSubject: "React",
    track: "Frontend",
    isActive: true,
  },
  {
    id: "dana-ismailova",
    name: "Dana Ismailova",
    group: "SE-104",
    favoriteSubject: "Databases",
    track: "Backend",
    isActive: false,
  },
];

export function filterStudents(studentList, filter) {
  if (filter === "active") {
    return studentList.filter((student) => student.isActive);
  }
  return studentList;
}
