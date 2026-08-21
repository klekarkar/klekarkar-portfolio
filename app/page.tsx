const projects = [
  {
    number: "01",
    eyebrow: "Climate adaptation · Model development",
    title: "SPONGE",
    subtitle:
      "A process-oriented model that turns the ‘sponge effect’ of soils and nature-based solutions into measurable water benefits.",
    detail:
      "Applied in Boechout, Belgium, to trace interception, infiltration, soil-water storage, runoff and groundwater recharge.",
    tags: ["Nature-based solutions", "Python", "Decision support"],
    visual: "sponge",
  },
  {
    number: "02",
    eyebrow: "Belgium · Climate change",
    title: "Groundwater recharge",
    subtitle:
      "How a wetter climate can still leave less water available when recharge shifts away from summer and autumn.",
    detail:
      "Ten global climate models and four emission pathways reveal an increasingly seasonal recharge regime across Belgium.",
    tags: ["mHM", "ISIMIP", "Climate scenarios"],
    visual: "recharge",
  },
  {
    number: "03",
    eyebrow: "Published research · HESS",
    title: "Soil moisture droughts",
    subtitle:
      "A national reconstruction showing that 2011–2020 was Belgium’s driest decade since 1970.",
    detail:
      "The analysis connects meteorological drought with slower subsurface recovery—and the water stress people and ecosystems actually experience.",
    tags: ["Drought", "Spatial analysis", "Hydrological modelling"],
    visual: "drought",
  },
];

const capabilities = [
  {
    index: "01",
    title: "Understand the system",
    body: "I translate climate, catchment, soil and groundwater processes into a clear picture of where water comes from, where it goes and what controls its availability.",
  },
  {
    index: "02",
    title: "Build the evidence",
    body: "I combine hydrological models, geospatial data and field observations to test scenarios and quantify uncertainty—not just produce attractive maps.",
  },
  {
    index: "03",
    title: "Shape the response",
    body: "I turn results into practical choices for drought resilience, water retention and nature-based adaptation that project teams and decision-makers can use.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "sponge") {
    return (
      <div className="project-art project-image-art" aria-hidden="true">
        <img src="/work/sponge-nature-based-solutions.webp" alt="" />
      </div>
    );
  }

  if (type === "recharge") {
    return (
      <div className="project-art recharge-art" aria-hidden="true">
        <div className="season-labels">
          <span>WIN</span><span>SPR</span><span>SUM</span><span>AUT</span>
        </div>
        <div className="season-bars">
          <i style={{ height: "84%" }} /><i style={{ height: "58%" }} />
          <i style={{ height: "19%" }} /><i style={{ height: "29%" }} />
        </div>
        <svg className="trend-line" viewBox="0 0 440 190" preserveAspectRatio="none">
          <path d="M3 132 C80 128 105 58 172 71 S274 142 330 105 S390 39 437 24" />
          <path className="trend-fill" d="M3 132 C80 128 105 58 172 71 S274 142 330 105 S390 39 437 24 L437 190 L3 190 Z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="project-art drought-art" aria-hidden="true">
      <div className="drought-grid">
        {Array.from({ length: 50 }).map((_, index) => (
          <i key={index} className={index > 38 || [6, 17, 23, 31].includes(index) ? "dry" : ""} />
        ))}
      </div>
      <div className="drought-note"><strong>37</strong><span>drought months<br />in one decade</span></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Katoria Lekarkar, home">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>LK</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/projects">Projects</a>
          <a href="/research">Research</a>
          <a href="/talks">Talks</a>
          <a href="/cv">CV</a>
          <a className="nav-contact" href="#contact">Let’s talk <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><span /> Hydrologist · Water resources engineer</p>
          <h1>Making water<br />systems <em>clear.</em></h1>
          <p className="hero-intro">
            I combine hydrological science, modelling and practical engineering to understand water availability—and design responses that hold up in a changing climate.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
            <a className="button button-quiet" href="mailto:katoria.lesaalon.lekarkar@vub.be">Contact me</a>
          </div>
          <div className="hero-meta">
            <span><i className="pulse" /> Based in Belgium</span>
            <span>Working internationally</span>
          </div>
        </div>

        <HydrologyLive />
      </section>

      <section className="credential-strip" aria-label="Professional profile">
        <div><small>BACKGROUND</small><strong>PhD · Engineering Sciences</strong><span>Vrije Universiteit Brussel</span></div>
        <div><small>FOCUS</small><strong>Water availability</strong><span>Drought · recharge · adaptation</span></div>
        <div><small>APPROACH</small><strong>Science into practice</strong><span>Models · maps · decisions</span></div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label"><span>01</span> ABOUT</div>
        <div className="about-grid">
          <h2>I work where hydrology, modelling and <em>implementation</em> meet.</h2>
          <div className="about-copy">
            <p>I am Katoria Lekarkar, a hydrologist and water resources engineer with experience across research, consulting and infrastructure projects in Europe and Africa.</p>
            <p>My work focuses on a deceptively simple question: how much water is available, now and in the future? Answering it means connecting climate, soils, vegetation, rivers and groundwater—and presenting the result so that it leads to a better decision.</p>
            <a className="text-link" href="#expertise">See how I work <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-heading">
          <div className="section-label light"><span>02</span> SELECTED WORK</div>
          <h2>From national climate questions to site-level solutions.</h2>
          <p>Selected research and model-development work on the processes that control water availability.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <ProjectVisual type={project.visual} />
              <div className="project-content">
                <div className="project-number">{project.number}</div>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-lead">{project.subtitle}</p>
                <p className="project-detail">{project.detail}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="evidence section-shell">
        <div className="evidence-intro">
          <div className="section-label"><span>03</span> RESEARCH IN NUMBERS</div>
          <h2>Evidence that tells a water story.</h2>
        </div>
        <div className="metrics">
          <div><strong>37</strong><span>drought months in Belgium during 2011–2020</span></div>
          <div><strong>10</strong><span>global climate models evaluated for future recharge</span></div>
          <div><strong>4</strong><span>emission pathways, from low to very high warming</span></div>
          <div><strong>2</strong><span>scales connected: national patterns and local action</span></div>
        </div>
      </section>

      <section className="expertise section-shell" id="expertise">
        <div className="section-heading dark-text">
          <div className="section-label"><span>04</span> EXPERTISE</div>
          <h2>A rigorous route from question to action.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article key={capability.index}>
              <span>{capability.index}</span>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
            </article>
          ))}
        </div>
        <div className="toolbox">
          <div>
            <p className="toolbox-label">CORE AREAS</p>
            <p>Hydrological modelling · Climate-impact assessment · Groundwater recharge · Soil moisture drought · Nature-based solutions · Water resources planning</p>
          </div>
          <div>
            <p className="toolbox-label">TOOLS</p>
            <p>Python · GIS · mHM · SWAT+ · Google Earth Engine · HPC · Remote sensing · Data visualisation</p>
          </div>
        </div>
      </section>

      <section className="experience section-shell">
        <div className="section-label"><span>05</span> EXPERIENCE</div>
        <div className="experience-grid">
          <div>
            <p>2020 — 2026</p>
            <h3>Doctoral researcher</h3>
            <span>Vrije Universiteit Brussel · Belgium</span>
          </div>
          <div>
            <p>2017 — 2020</p>
            <h3>Water resources engineer</h3>
            <span>Rural Focus Ltd · Kenya</span>
          </div>
          <div>
            <p>Selected projects</p>
            <h3>Belgium · Kenya · Ethiopia · DRC · Cabo Verde · Spain</h3>
            <span>Research, catchment assessment and water planning</span>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-watermark" aria-hidden="true">WATER</div>
        <div className="contact-inner">
          <p className="kicker light-kicker"><span /> AVAILABLE FOR THE NEXT CHALLENGE</p>
          <h2>Let’s make the water<br />picture <em>clearer.</em></h2>
          <p>If you are working on water availability, drought resilience, climate adaptation or nature-based solutions, I would be glad to hear from you.</p>
          <a className="button contact-button" href="mailto:katoria.lesaalon.lekarkar@vub.be">Start a conversation <Arrow /></a>
          <div className="social-links"><a href="https://www.linkedin.com/in/katoria-lekarkar-504839101/">LinkedIn</a><a href="https://scholar.google.com/citations?user=_rBmLxQAAAAJ&hl=en">Google Scholar</a><a href="https://github.com/klekarkar">GitHub</a><a href="https://orcid.org/0000-0003-4527-5422">ORCID</a></div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /></span><span>LK</span></a>
        <p>© 2026 Katoria Lekarkar · Hydrology · Water resources · Climate adaptation</p>
        <div><a href="mailto:katoria.lesaalon.lekarkar@vub.be">Email</a><a href="https://www.linkedin.com/in/katoria-lekarkar-504839101/">LinkedIn</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
import HydrologyLive from "./hydrology-live";
