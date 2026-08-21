import type { Metadata } from "next";
import { ArrowIcon, InnerHero, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Research | Katoria Lekarkar",
  description: "Research on soil-moisture drought, groundwater recharge, climate change and nature-based water retention.",
  openGraph: { title: "Research | Katoria Lekarkar", description: "Research on the subsurface controls of water availability.", images: [] },
  twitter: { title: "Research | Katoria Lekarkar", description: "Research on the subsurface controls of water availability.", images: [] },
};

const studies = [
  { status: "Published · HESS · 2026", title: "Reconstructed soil moisture droughts reveal that 2011–2020 was the driest decade in Belgium since 1970", copy: "A national reconstruction of soil-moisture drought and recovery, showing how subsurface memory sustains water stress after meteorological conditions improve.", url: "https://scholar.google.com/citations?user=_rBmLxQAAAAJ&hl=en" },
  { status: "Manuscript", title: "Climate change intensifies the seasonality of groundwater recharge in Belgium", copy: "An ensemble assessment using ten global climate models and four emission pathways to explain why annual recharge can decline even as winter precipitation increases.", url: "https://scholar.google.com/citations?user=_rBmLxQAAAAJ&hl=en" },
  { status: "PhD research · Boechout", title: "Quantifying the water-retention benefits of nature-based solutions", copy: "A coupled observation-and-modelling framework that measures how restored areas change infiltration, soil-water storage, runoff and groundwater recharge.", url: "/projects" },
  { status: "Agricultural Water Management · 2024", title: "Climate change and crop water use in the Nyando basin", copy: "SWAT+ modelling of how anthropogenic warming changes crop-water requirements and water availability in western Kenya.", url: "https://www.sciencedirect.com/science/article/pii/S0378377424000313" },
];

export default function ResearchPage() {
  return <main><SiteHeader />
    <InnerHero index="02" label="Research" title="Following water below the surface." intro="My research asks how soils and groundwater control water availability, how climate change is altering those controls, and how better evidence can improve adaptation." />
    <section className="research-list section-shell">
      {studies.map((study, index) => <article key={study.title}><div className="research-count">{String(index + 1).padStart(2, "0")}</div><div><p className="research-status">{study.status}</p><h2>{study.title}</h2><p>{study.copy}</p><a className="text-link" href={study.url}>View source <ArrowIcon /></a></div></article>)}
    </section>
    <section className="thesis-band"><div><p>DOCTORAL THESIS</p><h2>Dynamics of subsurface water in a changing climate</h2></div><p>An assessment of subsurface controls on water availability and climate adaptation in Belgium.</p></section>
    <section className="page-cta"><p>Explore the full publication record.</p><a className="button contact-button" href="https://scholar.google.com/citations?user=_rBmLxQAAAAJ&hl=en">Google Scholar <ArrowIcon /></a></section>
    <SiteFooter />
  </main>;
}
