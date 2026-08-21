import type { Metadata } from "next";
import { InnerHero, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Talks | Katoria Lekarkar",
  description: "Selected talks on hydrology, nature-based solutions, drought, open science and low-cost monitoring.",
  openGraph: { title: "Talks | Katoria Lekarkar", description: "Hydrology shared in rooms where research meets practice.", images: [] },
  twitter: { title: "Talks | Katoria Lekarkar", description: "Hydrology shared in rooms where research meets practice.", images: [] },
};

const talks = [
  ["2025", "UNESCO Headquarters · Paris", "Strengthening open hydrology and citizen science", "UNESCO-IHP 50th anniversary"],
  ["2025", "European Geosciences Union · Vienna", "Quantifying the water-retention potential of nature-based solutions", "EGU General Assembly"],
  ["2024", "KNAW · Amsterdam", "Monitoring water retention in restored nature areas", "Boussinesq Lecture"],
  ["2024", "Cape Town · South Africa", "Open hardware and open software solutions for hydrology", "Open Water Symposium"],
  ["2024", "European Geosciences Union · Vienna", "A global dataset of soil moisture from microclimate sensors", "EGU General Assembly"],
  ["2023", "Aarhus University · Denmark", "Effects of climate change on crop water use", "International SWAT Conference"],
];

export default function TalksPage() {
  return <main><SiteHeader />
    <InnerHero index="03" label="Talks & teaching" title="Hydrology, shared clearly." intro="I present research to scientific, professional and public audiences, and teach practical hydrological modelling to the next generation of water professionals." />
    <section className="talks-grid section-shell">
      {talks.map(([year, place, title, event], index) => <article key={title}><div className="talk-number">{String(index + 1).padStart(2, "0")}</div><p>{year} · {place}</p><h2>{title}</h2><span>{event}</span></article>)}
    </section>
    <section className="teaching-band section-shell"><div className="section-label light"><span>+</span> TEACHING</div><div className="teaching-grid"><article><span>VUB · KU Leuven</span><h3>Surface Water Hydrology</h3><p>Practical modelling, sensitivity analysis, calibration and validation.</p></article><article><span>VUB · IUPWARE</span><h3>Surface Water Modelling</h3><p>SWAT+ model setup and rigorous evaluation of model performance.</p></article><article><span>Boechout · Belgium</span><h3>Integrated field project</h3><p>Supervising fieldwork and modelling of water retention in a restored nature area.</p></article></div></section>
    <SiteFooter />
  </main>;
}
