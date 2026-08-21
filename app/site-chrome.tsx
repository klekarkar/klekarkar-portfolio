export function BrandIdentity() {
  return <><span className="brand-monogram" aria-hidden="true"><b>L</b><b>K</b></span><span className="brand-wordmark">Katoria Lekarkar</span></>;
}

export function ArrowIcon() {
  return <svg className="arrow-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M6 4h6v6" /></svg>;
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Katoria Lekarkar, home">
        <BrandIdentity />
      </a>
      <nav aria-label="Primary navigation">
        <a href="/projects">Projects</a>
        <a href="/research">Research</a>
        <a href="/talks">Talks</a>
        <a href="/cv">CV</a>
        <a className="nav-contact" href="mailto:katoria.lesaalon.lekarkar@vub.be">Let’s talk <ArrowIcon /></a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <p>© 2026 Katoria Lekarkar</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}

export function InnerHero({ index, label, title, intro }: { index: string; label: string; title: string; intro: string }) {
  return (
    <section className="inner-hero">
      <div className="inner-index">{index}</div>
      <div>
        <p className="kicker"><span /> {label}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
