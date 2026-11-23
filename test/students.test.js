import test from "node:test";
import assert from "node:assert/strict";
import { filterStudents, students } from "../src/data/students.js";

test("student fixtures have stable unique ids and component props", () => {
  const ids = students.map((student) => student.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const student of students) {
    assert.ok(student.name);
    assert.ok(student.group);
    assert.ok(student.favoriteSubject);
    assert.equal(typeof student.isActive, "boolean");
  }
});

test("student filter returns all students or only active students", () => {
  assert.equal(filterStudents(students, "all"), students);
  assert.deepEqual(
    filterStudents(students, "active").map((student) => student.id),
    ["aida-uulu", "nurlan-asanov", "timur-bekov"],
  );
  assert.deepEqual(filterStudents([], "active"), []);
});
