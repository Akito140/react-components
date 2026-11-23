export default function HighlightBox({ label, children }) {
  return (
    <aside className="highlight-box">
      <span className="highlight-icon" aria-hidden="true">✦</span>
      <div>
        {label && <p className="highlight-label">{label}</p>}
        <div>{children}</div>
      </div>
    </aside>
  );
}
