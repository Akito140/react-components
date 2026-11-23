# React Components

An interactive React assignment project based on **Reading and Research W9**.
It demonstrates reusable function components, JSX, props, `useState`, events,
controlled inputs, conditional rendering, and array rendering with stable keys.

## Run locally

Requires Node.js 18 or newer.

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; run the assignment checks with
`npm test`.

## Assignment coverage

- **Introduction to React:** title, description, JSX expressions, and dynamic
  current-year footer.
- **About this Course:** composed section heading and reusable highlight box.
- **StudentCard:** reusable cards receiving name, group, favorite subject, and
  status as props; student objects are rendered from an array with keys.
- **Counter:** increment and decrement buttons backed by component state.
- **CourseInfo:** prop-driven course name and conditional details toggle.
- **LivePreview:** controlled text input with immediate preview.
- **Student directory:** `StudentList` and `StudentFilter` components with
  Everyone / Active only filtering and active-status styling.

All student data is fictional and stored locally in `src/data/students.js`.
