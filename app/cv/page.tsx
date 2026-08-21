import type { Metadata } from "next";
import { InnerHero, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "CV | Katoria Lekarkar",
  description: "Experience, education and technical expertise of hydrologist and water resources engineer Katoria Lekarkar.",
  openGraph: { title: "CV | Katoria Lekarkar", description: "Hydrology, water resources and climate adaptation experience.", images: [] },
  twitter: { title: "CV | Katoria Lekarkar", description: "Hydrology, water resources and climate adaptation experience.", images: [] },
};

export default function CvPage() {
  return <main><SiteHeader />
    <InnerHero index="04" label="Curriculum vitae" title="Research depth. Practical range." intro="A career connecting hydrological analysis with the real decisions, infrastructure and collaborations that determine water security." />
    <section className="cv-layout section-shell">
      <aside><p>PROFILE</p><h2>Katoria Lekarkar</h2><span>Hydrologist & water resources engineer</span><div className="cv-links"><a href="mailto:katoria.lesaalon.lekarkar@vub.be">Email ↗</a><a href="https://www.linkedin.com/in/katoria-lekarkar-504839101/">LinkedIn ↗</a><a href="https://github.com/klekarkar">GitHub ↗</a><a href="https://orcid.org/0000-0003-4527-5422">ORCID ↗</a></div></aside>
      <div className="cv-main">
        <section><p className="cv-section-title">EXPERIENCE</p><div className="cv-entry"><span>2020–2026</span><div><h3>Doctoral Researcher</h3><p>Vrije Universiteit Brussel · Water and Climate Research Group</p><small>National drought reconstruction, groundwater-recharge scenarios, nature-based water retention, open science and project coordination.</small></div></div><div className="cv-entry"><span>2017–2020</span><div><h3>Water Resources Engineer</h3><p>Rural Focus Ltd · Kenya</p><small>Feasibility studies, water masterplans, climate-resilience strategies, engineering design, cost estimates and construction supervision.</small></div></div></section>
        <section><p className="cv-section-title">EDUCATION</p><div className="cv-entry"><span>2026</span><div><h3>PhD in Engineering Sciences</h3><p>Vrije Universiteit Brussel</p><small>Subsurface controls on water availability and climate adaptation in Belgium.</small></div></div><div className="cv-entry"><span>Master’s</span><div><h3>Water Resources Engineering</h3><p>KU Leuven & Vrije Universiteit Brussel</p><small>Interuniversity Programme in Water Resources Engineering.</small></div></div><div className="cv-entry"><span>Bachelor’s</span><div><h3>Civil Engineering</h3><p>Engineering foundation for water infrastructure and project delivery.</p></div></div></section>
        <section><p className="cv-section-title">TECHNICAL EXPERTISE</p><div className="cv-skill-grid"><div><h3>Hydrology</h3><p>Drought · groundwater recharge · water balance · catchment processes · climate impacts</p></div><div><h3>Modelling</h3><p>mHM · SWAT+ · conceptual models · calibration · scenario assessment</p></div><div><h3>Data & spatial</h3><p>Python · GIS · Google Earth Engine · remote sensing · HPC · visualisation</p></div><div><h3>Project delivery</h3><p>Feasibility · masterplanning · technical reporting · stakeholder engagement · supervision</p></div></div></section>
        <section><p className="cv-section-title">LANGUAGES</p><p className="cv-language">English <strong>Professional</strong> · Dutch <strong>B1, progressing</strong> · French <strong>Basic</strong></p></section>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
