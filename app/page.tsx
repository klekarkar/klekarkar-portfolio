import HydrologyLive from "./hydrology-live";
import { ArrowIcon, BrandIdentity } from "./site-chrome";

type SelectedWork = {
  number: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  detail: string;
  tags: string[];
  visual?: "sponge" | "recharge";
  image?: string;
  credit?: string;
};

const projects: SelectedWork[] = [
  {
    number: "01",
    eyebrow: "Climate adaptation · Model development",
    title: "SPONGE",
    subtitle:
      "A process-oriented model that turns the ‘sponge effect’ of soils and nature-based solutions into measurable water benefits.",
    detail:
      "At Boechout, SPONGE traces how rainfall becomes interception, storage, runoff, drainage and recharge—before and after an intervention.",
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
      "Across ten climate models and four emissions pathways, recharge shifts decisively toward winter as summer and autumn losses deepen.",
    tags: ["mHM", "ISIMIP", "Climate scenarios"],
    visual: "recharge",
  },
  {
    number: "03",
    eyebrow: "Kenya · Water masterplanning",
    title: "Ol Pejeta Conservancy",
    subtitle:
      "A 20-year water masterplan for an integrated conservancy supporting staff, tourism, cattle and wildlife.",
    detail:
      "The plan prioritised abstraction, storage, distribution, wastewater reuse and investment across normal, dry and exceptional conditions.",
    tags: ["Masterplanning", "Water security", "Rural Focus"],
    image: "/projects/ol-pejeta-masterplan.webp",
    credit: "Photo: Thomas Lindvig",
  },
  {
    number: "04",
    eyebrow: "Kenya · Rainwater harvesting",
    title: "Meibae rock catchment",
    subtitle:
      "A rock-catchment reservoir and solar-pumped supply designed for a remote rangers’ camp.",
    detail:
      "Feasibility, engineering design and construction supervision delivered 150,000 litres of storage and a more reliable permanent supply.",
    tags: ["Rainwater harvesting", "Engineering design", "Rural Focus"],
    image: "/projects/meibae-rock-catchment.webp",
  },
  {
    number: "05",
    eyebrow: "Kenya · Spring protection",
    title: "Loiragai Spring",
    subtitle:
      "Rehabilitation design for a gravity-fed spring system serving people, livestock and wildlife.",
    detail:
      "The assessment restored the system around environmental-flow requirements, stronger crossings and more reliable consumer points.",
    tags: ["Water supply", "Rehabilitation", "Rural Focus"],
    image: "/projects/loiragai-spring.webp",
  },
];

const capabilities = [
  {
    index: "01",
    title: "Understand the system",
    body: "I translate climate, catchment, soil and groundwater processes into a clear picture of where water comes from, where it goes and what controls its availability.",
    image: "/hero-live-hydrology.webp",
  },
  {
    index: "02",
    title: "Build the evidence",
    body: "I combine hydrological models, geospatial data and field observations to test scenarios and quantify uncertainty—not just produce attractive maps.",
    image: "/projects/open-water-science.webp",
  },
  {
    index: "03",
    title: "Shape the response",
    body: "I turn results into practical choices for drought resilience, water retention and nature-based adaptation that project teams and decision-makers can use.",
    image: "/work/sponge-nature-based-solutions.webp",
  },
];

function ProjectVisual({ type, image, credit }: { type?: SelectedWork["visual"]; image?: string; credit?: string }) {
  if (image) {
    return (
      <div className="project-art project-image-art" aria-hidden="true">
        <img src={image} alt="" />
        {credit && <span className="image-credit">{credit}</span>}
      </div>
    );
  }

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

  return null;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Katoria Lekarkar, home">
          <BrandIdentity />
        </a>
        <nav aria-label="Primary navigation">
          <a href="/projects">Projects</a>
          <a href="/research">Research</a>
          <a href="/talks">Talks</a>
          <a href="/cv">CV</a>
          <a className="nav-contact" href="#contact">Let’s talk <ArrowIcon /></a>
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
            <a className="button button-primary" href="#work">Explore my work <ArrowIcon /></a>
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
        <div><small>FOCUS</small><strong>Water Security</strong><span>Climate change · water availability · adaptation</span></div>
        <div><small>APPROACH</small><strong>Science into practice</strong><span>Science · decisions · solutions</span></div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label"><span>01</span> ABOUT</div>
        <div className="about-grid">
          <h2>I work where hydrology, modelling and <em>implementation</em> meet.</h2>
          <div className="about-copy">
            <p>I am Katoria Lekarkar, a hydrologist and water resources engineer with experience across research, consulting and infrastructure projects in Europe and Africa.</p>
            <p>My work focuses on a deceptively simple question: how much water is available, now and in the future? Answering it means connecting climate, soils, vegetation, rivers and groundwater—and presenting the result so that it leads to a better decision.</p>
            <a className="text-link" href="#expertise">See how I work <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-heading">
          <div className="section-label light"><span>02</span> SELECTED WORK</div>
          <h2>From national climate questions to local solutions.</h2>
          <p>Research and field engineering that connect climate-scale change with practical water security.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <ProjectVisual type={project.visual} image={project.image} credit={project.credit} />
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

      <section className="expertise section-shell" id="expertise">
        <div className="section-heading dark-text">
          <div className="section-label"><span>03</span> EXPERTISE</div>
          <h2>A rigorous route from question to action.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article key={capability.index}>
              <img src={capability.image} alt="" aria-hidden="true" />
              <span>{capability.index}</span>
              <div className="capability-copy">
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="toolbox">
          <div>
            <p className="toolbox-label">TOOLS</p>
            <div className="keyword-list">{["Python", "GIS", "mHM", "SWAT+", "Google Earth Engine", "HPC", "Remote sensing", "Data visualisation"].map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-watermark" aria-hidden="true">WATER</div>
        <div className="contact-inner">
          <p className="kicker light-kicker"><span /> AVAILABLE FOR THE NEXT CHALLENGE</p>
          <h2>Let’s make the water<br />picture <em>clearer.</em></h2>
          <p>If you are working on water availability, drought resilience, climate adaptation or nature-based solutions, I would be glad to hear from you.</p>
          <a className="button contact-button" href="mailto:katoria.lesaalon.lekarkar@vub.be">Start a conversation <ArrowIcon /></a>
          <div className="social-links"><a href="https://www.linkedin.com/in/katoria-lekarkar-504839101/">LinkedIn</a><a href="https://scholar.google.com/citations?user=_rBmLxQAAAAJ&hl=en">Google Scholar</a><a href="https://github.com/klekarkar">GitHub</a><a href="https://orcid.org/0000-0003-4527-5422">ORCID</a></div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><BrandIdentity /></a>
        <p>© 2026 Katoria Lekarkar · Hydrology · Water resources · Climate adaptation</p>
        <div><a href="mailto:katoria.lesaalon.lekarkar@vub.be">Email</a><a href="https://www.linkedin.com/in/katoria-lekarkar-504839101/">LinkedIn</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
