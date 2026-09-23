import type { Metadata } from "next";
import { ArrowIcon, InnerHero, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Talks | Katoria Lekarkar",
  description: "Selected talks on hydrology, nature-based solutions, drought, open science and low-cost monitoring.",
  openGraph: { title: "Talks | Katoria Lekarkar", description: "Hydrology shared in rooms where research meets practice.", images: [] },
  twitter: { title: "Talks | Katoria Lekarkar", description: "Hydrology shared in rooms where research meets practice.", images: [] },
};

// To add a talk, copy one object, keep the same field names and edit its content.
const talks = [
  {
    year: "24 JUN 2026",
    place: "Etterbeek · VUB",
    title: "IoT Monitoring for Nature-based Solutions",
    event: "NbSWISE Training Workshop 2026",
    narrative: [
      "I presented progress on SPONGE: a process-based representation of water retention through nature-based solutions.",
      "The session showed how the model translates different NbS interventions into changes in interception, infiltration, soil-water storage, drainage, runoff and groundwater recharge—connecting field monitoring with a clearer account of how each intervention works.",
    ],
  },
  {
    year: "2025",
    place: "UNESCO Headquarters · Paris",
    title: "Strengthening open hydrology and citizen science",
    event: "UNESCO-IHP 50th anniversary",
    narrative: [
      "During the 50th anniversary of UNESCO’s Intergovernmental Hydrological Programme, I presented work coordinated through the UNESCO Chair on Open Water Science and Education led by Prof. Ann van Griensven.",
      "My first presentation explained how the Chair was coordinating hydrological observations from low-cost soil-moisture sensors and collaborating with UNESCO to make the resulting data accessible through the UNESCO-IHP Water Information Network System (WINS).",
      "I also joined a plenary panel on the value of citizen science for hydrology, where I presented activities in Kenya and Bolivia and demonstrated a digital toolbox for consolidating citizen-science observations. In a third, more technical presentation at the International Drought Symposium, I discussed how in-situ measurements and process-based models can quantify the contribution of nature-based interventions to drought mitigation.",
    ],
  },
  {
    year: "2025",
    place: "European Geosciences Union · Vienna",
    title: "Quantifying the water-retention potential of nature-based solutions",
    event: "EGU General Assembly",
    narrative: [
      "I presented preliminary results from research coupling a conceptual hydrological model with in-situ observations from low-cost soil-moisture sensors to assess the effectiveness of local nature-based water-retention measures.",
      "Nature-based solutions can support water retention, groundwater recharge, biodiversity and water quality, but their hydrological effects are difficult to isolate. Existing models are often either too complex for local decisions or not designed to represent the distinctive features of restoration and rewetting interventions. Long-term observations that demonstrate performance are also scarce.",
      "Our study addresses these gaps with a simplified, process-based model that represents the catchment, the intervention area and exchanges between surface water, soil water and groundwater. A network of low-cost soil-moisture sensors and groundwater piezometers provides observations for evaluating the model and following the intervention over time.",
      "The coupled monitoring and modelling approach is intended to provide clearer evidence of how nature-based measures alter water storage and recharge, and to support their use as a drought-adaptation measure alongside conventional infrastructure.",
    ],
  },
  {
    year: "2024",
    place: "KNAW · Amsterdam",
    title: "Monitoring water retention in restored nature areas",
    event: "Boussinesq Lecture",
    narrative: [
      "I presented the progress of my research on combining low-cost environmental sensors with a conceptual hydrological model to quantify water retention in a restored nature conservation area in Boechout, Belgium.",
    ],
  },
  {
    year: "2024",
    place: "Cape Town · South Africa",
    title: "Open hardware and open software solutions for hydrology",
    event: "Open Water Symposium",
    narrative: [
      "This UNESCO-IHP workshop focused on open hardware and open software as practical, sustainable technologies for water resources monitoring and analysis.",
      "My presentation showed how low-cost soil-moisture sensors can support both conventional scientific monitoring and citizen-science initiatives, expanding the observations available for tackling environmental challenges such as droughts and floods.",
    ],
  },
  {
    year: "2024",
    place: "European Geosciences Union · Vienna",
    title: "A global dataset of soil moisture from microclimate sensors",
    event: "EGU General Assembly",
    narrative: [
      "The talk focused on the importance of soil-moisture monitoring, the gaps in existing observation networks and the potential of low-cost sensors to improve coverage in data-scarce regions.",
      "Soil moisture links the water, energy and carbon cycles and influences droughts, heatwaves and wildfires. Satellite products provide spatially continuous estimates, but their coarse resolution and the shortage of in-situ validation observations—particularly in Africa—limit their application.",
      "I presented the SoilTemp initiative, which harmonizes microclimate observations from thousands of locations around the world. TOMST TMS-4 loggers already provide high-frequency, georeferenced records across every continent, creating an opportunity to consolidate and calibrate a global soil-moisture dataset and connect it with established networks such as the International Soil Moisture Network.",
      "The wider goal is to expand soil-moisture monitoring through affordable sensors and citizen science, improving satellite validation, drought monitoring and other environmental applications where conventional monitoring remains sparse.",
    ],
  },
  {
    year: "2023",
    place: "Aarhus University · Denmark",
    title: "Effects of climate change on crop water use",
    event: "International SWAT Conference",
    narrative: [
      "I presented my master’s research on the effects of anthropogenic warming on crop water use in the Nyando area of western Kenya. The study used hydrological modelling to examine how changing climate conditions affect crop-water requirements and water availability.",
    ],
  },
];

export default function TalksPage() {
  return <main><SiteHeader active="talks" />
    <InnerHero index="03" label="Talks & teaching" title="Hydrology, shared clearly." intro="I present research to scientific, professional and public audiences, and teach practical hydrological modelling to the next generation of water professionals." />
    <section className="talks-grid section-shell">
      {talks.map((talk, index) => <article key={talk.title}>
        <div className="talk-number">{String(index + 1).padStart(2, "0")}</div>
        <p>{talk.year} · {talk.place}</p>
        <h2>{talk.title}</h2>
        <span className="talk-event">{talk.event}</span>
        <details className="narrative-disclosure talk-disclosure">
          <summary><span>Read narrative</span><span className="read-more-icon" aria-hidden="true"><ArrowIcon /></span></summary>
          <div className="narrative-content">{talk.narrative.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </details>
      </article>)}
    </section>
    <section className="teaching-band section-shell">
      <div className="section-label light"><span>+</span> TEACHING</div>
      <div className="teaching-grid">
        <article><span>VUB · KU Leuven</span><h3>Surface Water Hydrology</h3><p>Guiding practical hydrological-modelling sessions using the NAM model, with a focus on sensitivity analysis, calibration and validation.</p></article>
        <article><span>VUB · IUPWARE</span><h3>Surface Water Modelling</h3><p>Practical SWAT+ sessions covering hydrological processes, model setup, calibration and validation.</p></article>
        <article><span>Boechout · Belgium</span><h3>Integrated field project</h3><p>Supervising fieldwork and modelling to evaluate water retention in a restored nature conservation area.</p></article>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
