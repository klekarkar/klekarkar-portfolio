export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Katoria Lekarkar, home">
        <span className="brand-mark" aria-hidden="true"><i /></span>
        <span>LK</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/projects">Projects</a>
        <a href="/research">Research</a>
        <a href="/talks">Talks</a>
        <a href="/cv">CV</a>
        <a className="nav-contact" href="mailto:katoria.lesaalon.lekarkar@vub.be">Let’s talk <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <a className="brand footer-brand" href="/" aria-label="Back to homepage"><span className="brand-mark" aria-hidden="true"><i /></span><span>LK</span></a>
      <p>Hydrology · Water resources · Climate adaptation</p>
      <div><a href="mailto:katoria.lesaalon.lekarkar@vub.be">Email</a><a href="https://www.linkedin.com/in/katoria-lekarkar-504839101/">LinkedIn</a><a href="/">Home ↑</a></div>
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
