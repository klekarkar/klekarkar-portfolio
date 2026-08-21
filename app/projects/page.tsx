import type { Metadata } from "next";
import { InnerHero, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Projects | Katoria Lekarkar",
  description: "Selected water resources, climate resilience and hydrology projects in Europe and Africa.",
  openGraph: { title: "Projects | Katoria Lekarkar", description: "Water resources work from catchment planning to climate adaptation.", images: [] },
  twitter: { title: "Projects | Katoria Lekarkar", description: "Water resources work from catchment planning to climate adaptation.", images: [] },
};

const projects = [
  { year: "2023–2026", place: "Boechout, Belgium", title: "Water retention potential of a nature conservation area", copy: "Combining soil-moisture observations, groundwater data and a mechanistic model to evaluate how restored landscapes retain water.", tags: ["Nature-based solutions", "Monitoring", "Modelling"], tone: "aqua" },
  { year: "2023–2026", place: "Brussels · International", title: "UNESCO Chair on Open Water Science and Education", copy: "Coordinating open hydrological data, low-cost soil-moisture monitoring, citizen science tools and SWAT+ capacity building.", tags: ["Open science", "Project coordination", "Education"], tone: "blue" },
  { year: "2020", place: "Laikipia, Kenya", title: "Loiragai Spring Water Supply", copy: "Technical assessment and rehabilitation design for a gravity-fed spring system serving domestic users, livestock and wildlife.", tags: ["Water supply", "Rehabilitation", "Environmental flows"], tone: "green" },
  { year: "2019", place: "Laikipia & Samburu, Kenya", title: "Community conservancy water management plans", copy: "Five-year strategies to improve water accessibility and reliability for communities, livestock, agriculture and wildlife.", tags: ["Water planning", "Climate resilience", "Stakeholders"], tone: "sand" },
  { year: "2018–2019", place: "Laikipia, Kenya", title: "Ol Pejeta Conservancy water masterplan", copy: "A 20-year plan connecting supply-demand assessment, infrastructure priorities, wastewater reuse and phased investment.", tags: ["Masterplanning", "Demand analysis", "Investment planning"], tone: "blue" },
  { year: "2017–2019", place: "Northern Kenya", title: "Climate-resilient water services for conservancies", copy: "Water-resource mapping, future climate assessment and infrastructure delivery in water-stressed community conservancies.", tags: ["Climate scenarios", "Water security", "Infrastructure"], tone: "aqua" },
  { year: "2018–2019", place: "Samburu, Kenya", title: "Meibae rock-catchment water supply", copy: "Feasibility, design and construction supervision for a 150,000-litre rainwater storage system and solar pumping scheme.", tags: ["Engineering design", "Rainwater harvesting", "Construction"], tone: "sand" },
  { year: "2017", place: "Turkana, Kenya", title: "Dryland agriculture feasibility for Kalobeyei", copy: "Assessment of rainwater harvesting, farm ponds, spate irrigation, dams and groundwater options for a refugee-hosting settlement.", tags: ["Drylands", "Food security", "Feasibility"], tone: "green" },
  { year: "2017–2018", place: "Kenya", title: "UNICEF WASH design manual", copy: "Revision of drawings, bills of quantities and cost estimates for school sanitation and water-storage facilities.", tags: ["WASH", "Technical design", "Costing"], tone: "blue" },
  { year: "2017", place: "Tana River, Kenya", title: "Ishaqbin community water supply", copy: "Topographic survey and distribution-system design for community, livestock and wildlife water needs.", tags: ["Surveying", "Distribution design", "Multi-use water"], tone: "aqua" },
];

export default function ProjectsPage() {
  return <main><SiteHeader />
    <InnerHero index="01" label="Project experience" title="Water work grounded in place." intro="From strategic water planning to engineering design, I have worked across the full project cycle: diagnosing the problem, assessing options, shaping the investment and supporting delivery." />
    <section className="project-archive section-shell">
      <div className="archive-summary"><span>10 selected projects</span><span>Europe + Africa</span><span>Strategy → implementation</span></div>
      <div className="archive-grid">
        {projects.map((project, index) => <article className={`archive-card ${project.tone}`} key={project.title}>
          <div className="archive-visual"><span>{String(index + 1).padStart(2, "0")}</span><i /><i /><i /></div>
          <div className="archive-body"><div className="archive-meta"><span>{project.year}</span><span>{project.place}</span></div><h2>{project.title}</h2><p>{project.copy}</p><div className="tags light-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        </article>)}
      </div>
    </section>
    <section className="page-cta"><p>Have a water challenge that needs a clear plan?</p><a className="button contact-button" href="mailto:katoria.lesaalon.lekarkar@vub.be">Discuss a project <span aria-hidden="true">↗</span></a></section>
    <SiteFooter />
  </main>;
}
