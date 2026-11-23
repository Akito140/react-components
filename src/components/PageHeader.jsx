export default function PageHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Student Studio home">
        <span className="brand-mark" aria-hidden="true">S</span>
        <span>student studio</span>
      </a>
      <a className="header-link" href="#students">Meet the students <span aria-hidden="true">↗</span></a>
    </header>
  );
}
