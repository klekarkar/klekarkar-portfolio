import type { Metadata } from "next";
import { InnerHero, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Projects | Katoria Lekarkar",
  description: "Selected water resources, climate resilience and hydrology projects in Europe and Africa.",
  openGraph: { title: "Projects | Katoria Lekarkar", description: "Water resources work from catchment planning to climate adaptation.", images: [] },
  twitter: { title: "Projects | Katoria Lekarkar", description: "Water resources work from catchment planning to climate adaptation.", images: [] },
};

// To add a project, copy one object, keep the same field names and edit its content.
const projects = [
  {
    year: "2023–2026",
    place: "Boechout, Belgium",
    title: "Water retention potential of a nature conservation area",
    image: "/projects/boechout-water-retention.webp",
    copy: "Combining soil-moisture observations, groundwater data and a mechanistic model to evaluate how restored landscapes retain water.",
    narrative: [
      "This research evaluates the water-retention potential of a restored nature conservation area managed by Natuurpunt in Boechout, Belgium.",
      "I installed a network of low-cost soil-moisture sensors and analysed existing groundwater observations to follow how water moves through the site. I combined these measurements with a mechanistic hydrological model to quantify how restoration and nature-based interventions affect soil-water storage, drainage and groundwater recharge.",
      "The work connects field evidence with a practical modelling approach that can support decisions about where and how landscape restoration can strengthen drought resilience.",
    ],
    tags: ["Nature-based solutions", "Monitoring", "Modelling"],
    tone: "aqua",
  },
  {
    year: "2023–2026",
    place: "Brussels · International",
    title: "UNESCO Chair on Open Water Science and Education",
    image: "/projects/open-water-science.webp",
    copy: "Using low-cost sensors, digital devices, open data platforms and modelling tools to make hydrology more accessible and reproducible.",
    narrative: [
      "The UNESCO Chair on Open Water Science and Education uses digital technologies to widen access to hydrological monitoring, analysis and learning.",
      "As project manager, I coordinated work with low-cost soil-moisture probes, water-quality devices, citizen-science tools, digital data workflows and open hydrological platforms. I led the processing, documentation and publication of sensor observations through UNESCO-IHP WINS and supported dashboards that turn spatial and time-series data into usable information.",
      "I also developed open-source SWAT+ learning resources for Climate Risk Informed Decision Analysis and connected digital tools with practical capacity building for students, researchers and water professionals.",
    ],
    highlights: [
      "Prepared low-cost soil-moisture datasets for publication through UNESCO-IHP WINS.",
      "Connected low-cost digital devices with open, citizen-led hydrological monitoring.",
      "Developed SWAT+ training materials, dashboards and reproducible data workflows.",
    ],
    tags: ["Open science", "Project coordination", "Education"],
    tone: "blue",
  },
  {
    year: "2020",
    place: "Laikipia, Kenya",
    title: "Loiragai Spring Water Supply",
    image: "/projects/loiragai-spring.webp",
    copy: "Technical assessment and rehabilitation design for a gravity-fed spring system serving domestic users, livestock and wildlife.",
    narrative: [
      "Loiragai Spring Water Supply is a gravity-fed scheme serving the Il Ngwesi area. Inadequate maintenance, floods and wildlife damage had caused the system to deteriorate and nearly stop functioning, even though much of the original infrastructure remained in place.",
      "I assessed the two intakes, distribution lines, river crossings, storage tank, community water points and livestock troughs, documenting the failure modes and defining practical rehabilitation measures. The work also addressed reserve-flow requirements so that abstraction could meet community needs while maintaining environmental flows.",
      "The assignment produced rehabilitation drawings, a costed bill of quantities and a prioritized plan covering intake repairs, pipeline replacement and anchoring, storage improvements, repaired water points and additional troughs to reduce human–wildlife conflict.",
    ],
    highlights: [
      "A prioritized and costed rehabilitation plan for the complete system.",
      "Design measures for environmental-flow compliance and abstraction approval.",
      "Recommendations to make crossings, pipelines and consumer points more robust.",
    ],
    tags: ["Water supply", "Rehabilitation", "Environmental flows"],
    tone: "green",
  },
  {
    year: "2019",
    place: "Laikipia & Samburu, Kenya",
    title: "Community conservancy water management plans",
    image: "/projects/conservancy-planning.webp",
    copy: "Five-year strategies to improve water accessibility and reliability for communities, livestock, agriculture and wildlife.",
    narrative: [
      "The Northern Rangelands Trust supports community conservancies across the drylands of northern and coastal Kenya, where reliable access to water is central to livelihoods, rangeland management, wildlife conservation and the prevention of resource-based conflict.",
      "This project assessed water resources within two community conservancies in Samburu and Laikipia Counties. The findings informed five-year water-management plans that set out practical strategies and actions to progressively improve water accessibility, reliability and security for domestic use, livestock, agriculture and wildlife.",
    ],
    tags: ["Water planning", "Climate resilience", "Stakeholders"],
    tone: "sand",
  },
  {
    year: "2018–2019",
    place: "Laikipia, Kenya",
    title: "Ol Pejeta Conservancy water masterplan",
    image: "/projects/ol-pejeta-masterplan.webp",
    copy: "A 20-year water plan for an integrated landscape supporting staff, tourism facilities, cattle and wildlife.",
    narrative: [
      "Ol Pejeta Conservancy needed a long-term plan to improve water security for staff housing, tourism facilities, livestock and wildlife under increasing climate variability and competing demands.",
      "I assessed existing sources, abstraction points, storage, treatment and distribution infrastructure; evaluated current water use and losses; and analysed surface-water availability and dry-season constraints on the Ewaso Nyiro River. The study also considered demand management, wastewater reuse and upgrades that could reduce supply interruptions.",
      "The result was a practical 20-year masterplan that quantified supply-demand gaps under normal, dry and exceptional conditions and organized investments into short-, medium- and long-term priorities. The plan provided maps, designs and recommendations to support implementation and budgeting decisions.",
    ],
    highlights: [
      "Quantified supply-demand gaps across normal, dry and exceptional scenarios.",
      "Prioritized critical upgrades for more reliable dry-period supply.",
      "Developed a phased 20-year investment framework.",
    ],
    tags: ["Masterplanning", "Demand analysis", "Investment planning"],
    tone: "blue",
    credit: "Photo: Thomas Lindvig",
  },
  {
    year: "2017–2019",
    place: "Northern Kenya",
    title: "Climate-resilient water services for conservancies",
    image: "/projects/climate-resilient-services.webp",
    copy: "Water-resource mapping, future climate assessment and infrastructure delivery in water-stressed community conservancies.",
    narrative: [
      "This work formed part of the Climate Resilient Community Conservancies Programme, which aimed to improve climate resilience and water security in selected conservancies across the arid and semi-arid regions of northern Kenya.",
      "The project combined participatory water-resource mapping with an assessment of future water availability using climate variables from the HadRM3P regional climate model. It also established a framework for linking conservancies with development partners and supported the design and construction of water-supply infrastructure in critically water-stressed areas identified with local communities.",
    ],
    tags: ["Climate scenarios", "Water security", "Infrastructure"],
    tone: "aqua",
  },
  {
    year: "2018–2019",
    place: "Samburu, Kenya",
    title: "Meibae rock-catchment water supply",
    image: "/projects/meibae-rock-catchment.webp",
    copy: "Feasibility, design and construction supervision for a 150,000-litre rainwater storage system and solar pumping scheme.",
    narrative: [
      "Meibae Conservancy needed a permanent, cost-effective water supply for its rangers’ camp after repeated breakdowns made the existing pipeline unreliable. Following an assessment of groundwater, pipeline and rainwater-harvesting options, a rock catchment and large masonry storage tank were selected.",
      "I evaluated supply reliability under different precipitation conditions, completed the topographic survey and engineering design, prepared costs and tender evaluations, and supervised construction through completion and handover.",
      "The completed system combines a rock-catchment reservoir, 150,000 litres of storage and solar-powered pumping to deliver water to the camp.",
    ],
    highlights: [
      "Feasibility assessment and reliability analysis for alternative supplies.",
      "Engineering design, costing and tender evaluation.",
      "Construction supervision, handover and monitoring.",
    ],
    tags: ["Engineering design", "Rainwater harvesting", "Construction"],
    tone: "sand",
  },
  {
    year: "2017",
    place: "Turkana, Kenya",
    title: "FAO dryland agriculture and water harvesting",
    image: "/projects/kalobeyei-drylands.webp",
    copy: "Using half-moon bunds and water pans to capture scarce rainfall and support crop production in a dry landscape.",
    narrative: [
      "The project examined how simple earthworks could turn short, intense rainfall into useful soil moisture for crops in a dry landscape.",
      "Half-moon bunds were arranged across the slope to intercept overland flow, reduce erosion and concentrate water around crops and young trees. Water pans captured larger runoff pulses for productive use between rainfall events.",
      "The work linked the placement of each measure with runoff pathways, soil conditions and practical maintenance needs to support more resilient dryland production.",
    ],
    tags: ["Half-moon bunds", "Water pans", "Dryland agriculture"],
    tone: "green",
    credit: "Photo: FAO",
  },
  {
    year: "2017–2018",
    place: "Kenya",
    title: "UNICEF WASH design manual",
    image: "/projects/unicef-wash.webp",
    copy: "Revision of drawings, bills of quantities and cost estimates for school sanitation and water-storage facilities.",
    narrative: [
      "The assignment supported revision of Kenya’s Design and Construction Manual for Water, Sanitation and Hygiene Facilities in Primary Schools. I revised technical drawings for sanitation and water-storage facilities and updated the corresponding bills of quantities and cost estimates so the manual could provide consistent, buildable and costed reference designs.",
    ],
    tags: ["WASH", "Technical design", "Costing"],
    tone: "blue",
  },
  {
    year: "2017",
    place: "Tana River, Kenya",
    title: "Ishaqbin community water supply",
    image: "/projects/ishaqbin-water-supply.webp",
    copy: "Topographic survey and distribution-system design for community, livestock and wildlife water needs.",
    narrative: [
      "The project began with a reconnaissance of the existing distribution network supplied by a borehole on the banks of the River Tana. I then completed a topographic survey of proposed pipeline routes serving community drinking-water points, livestock and wildlife within a sanctuary.",
      "The design included pump and storage sizing to provide approximately one month of reserve storage when the source or distribution system was disrupted.",
    ],
    tags: ["Surveying", "Distribution design", "Multi-use water"],
    tone: "aqua",
  },
];

export default function ProjectsPage() {
  return <main><SiteHeader />
    <InnerHero index="01" label="Project experience" title="Water work grounded in place." intro="From strategic water planning to engineering design, I have worked across the full project cycle: diagnosing the problem, assessing options, shaping the investment and supporting delivery." />
    <section className="project-archive section-shell">
      <div className="archive-summary"><span>10 selected projects</span><span>Europe + Africa</span><span>Strategy → implementation</span></div>
      <div className="archive-grid">
        {projects.map((project, index) => <article className={`archive-card ${project.tone}`} key={project.title}>
          <div className="archive-visual">
            <img src={project.image} alt="" />
            <div className="archive-image-wash" aria-hidden="true" />
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div className="archive-image-title">
              <small>{project.year} · {project.place}</small>
              <strong>{project.title}</strong>
            </div>
            {project.credit && <span className="archive-image-credit">{project.credit}</span>}
          </div>
          <div className="archive-body">
            <div className="archive-meta"><span>{project.year}</span><span>{project.place}</span></div>
            <h2>{project.title}</h2>
            <p>{project.copy}</p>
            <details className="narrative-disclosure">
              <summary><span>Read project narrative</span><span className="disclosure-icon" aria-hidden="true">+</span></summary>
              <div className="narrative-content">
                {project.narrative.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {project.highlights && <><h3>Selected outcomes</h3><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></>}
              </div>
            </details>
            <div className="tags light-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>
        </article>)}
      </div>
    </section>
    <section className="page-cta"><p>Have a water challenge that needs a clear plan?</p><a className="button contact-button" href="mailto:katoria.lesaalon.lekarkar@vub.be">Discuss a project <span aria-hidden="true">↗</span></a></section>
    <SiteFooter />
  </main>;
}
