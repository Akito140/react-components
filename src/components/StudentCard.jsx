export default function StudentCard({ name, group, favoriteSubject, track, isActive }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <article className={`student-card${isActive ? " is-active" : ""}`}>
      <div className="student-card-top">
        <span className="student-avatar" aria-hidden="true">{initials}</span>
        <span className={`status-badge${isActive ? " status-active" : ""}`}>
          <span className="status-dot" />
          {isActive ? "Active" : "Taking a break"}
        </span>
      </div>
      <p className="student-track">{track} track · {group}</p>
      <h3>{name}</h3>
      <p className="favorite-subject">
        <span>Currently into</span>
        {favoriteSubject}
      </p>
    </article>
  );
}
