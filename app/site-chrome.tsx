export function BrandIdentity() {
  return <><span className="brand-monogram" aria-hidden="true"><b>L</b><b>K</b></span><span className="brand-wordmark">Katoria Lekarkar</span></>;
}

export function ArrowIcon() {
  return <svg className="arrow-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M6 4h6v6" /></svg>;
}

type NavigationSection = "projects" | "research" | "talks" | "cv";

const navigation: { href: string; label: string; section: NavigationSection }[] = [
  { href: "/projects", label: "Projects", section: "projects" },
  { href: "/research", label: "Research", section: "research" },
  { href: "/talks", label: "Talks", section: "talks" },
  { href: "/cv", label: "CV", section: "cv" },
];

export function SiteHeader({ active, home = false }: { active?: NavigationSection; home?: boolean }) {
  return (
    <header className="site-header">
      <a className="brand" href={home ? "#top" : "/"} aria-label="Katoria Lekarkar, home">
        <BrandIdentity />
      </a>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <a
            className="nav-link"
            href={item.href}
            aria-current={active === item.section ? "page" : undefined}
            key={item.section}
          >
            {item.label}
          </a>
        ))}
        <a className="nav-contact" href={home ? "#contact" : "mailto:katoria.lesaalon.lekarkar@vub.be"}>Let’s talk <ArrowIcon /></a>
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
