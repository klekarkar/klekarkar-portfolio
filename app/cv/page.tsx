import type { Metadata } from "next";
import { InnerHero, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "CV | Katoria Lekarkar",
  description: "Experience, education and technical expertise of hydrologist and water resources engineer Katoria Lekarkar.",
  openGraph: { title: "CV | Katoria Lekarkar", description: "Hydrology, water resources and climate adaptation experience.", images: [] },
  twitter: { title: "CV | Katoria Lekarkar", description: "Hydrology, water resources and climate adaptation experience.", images: [] },
};

export default function CvPage() {
  return <main><SiteHeader active="cv" />
    <InnerHero index="04" label="Curriculum vitae" title="Research depth. Practical range." intro="A career connecting hydrological analysis with the real decisions, infrastructure and collaborations that determine water security." />
    <section className="cv-download section-shell" aria-label="Download curriculum vitae">
      <div>
        <p>DOWNLOADABLE CV</p>
        <h2>The complete record, ready to keep.</h2>
        <span>Download the current four-page CV for a concise overview of my research, engineering experience, education and technical expertise.</span>
      </div>
      <a className="button button-primary" href="/Katoria_Lekarkar_CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
    </section>
    <section className="cv-layout section-shell">
      <aside>
        <p>PROFILE</p>
        <h2>Katoria Lekarkar</h2>
        <span>Hydrologist & water resources engineer</span>
        <div className="cv-profile-copy">Recently completed PhD focused on water availability, drought and climate adaptation. I combine process-based modelling, environmental data and field observations with practical experience in water planning, infrastructure and international project delivery.</div>
        <div className="cv-registration"><strong>Professional registration</strong><span>Engineers Board of Kenya · B11549</span></div>
        <div className="cv-links">
          <a href="mailto:katoria.lesaalon.lekarkar@vub.be">Email ↗</a>
          <a href="https://www.linkedin.com/in/katoria-lekarkar-504839101/">LinkedIn ↗</a>
          <a href="https://github.com/klekarkar">GitHub ↗</a>
          <a href="https://orcid.org/0000-0003-4527-5422">ORCID ↗</a>
        </div>
      </aside>

      <div className="cv-main">
        <section>
          <p className="cv-section-title">EXPERIENCE</p>

          <div className="cv-entry">
            <span>2022–2026</span>
            <div>
              <h3>PhD Researcher — Water Availability & Climate Adaptation</h3>
              <p>Vrije Universiteit Brussel · Water and Climate Research Group</p>
              <small>Modelled how drought, recharge and land-surface processes shape Belgium’s present and future water availability.</small>
              <ul>
                <li>Applied mHM across Belgium to simulate soil moisture, baseflow, recharge and water availability under historical and future climates.</li>
                <li>Reconstructed root-zone droughts since 1970, revealing how they emerge, persist and recover.</li>
                <li>Quantified future recharge with ten global climate models and four emissions scenarios, exposing a stronger dependence on winter and spring recharge.</li>
                <li>Tested low-cost soil-moisture sensors for field monitoring and evaluation of water-retention measures.</li>
                <li>Developed SPONGE, a modular model for comparing how nature-based interventions influence storage, drainage, recharge and drought resilience.</li>
                <li>Used Python, GIS, machine learning and high-performance computing to isolate climatic and land-surface controls on water scarcity.</li>
              </ul>
            </div>
          </div>

          <div className="cv-entry">
            <span>2023–2026</span>
            <div>
              <h3>Project Manager — UNESCO Chair on Open Water Science and Education</h3>
              <p>Vrije Universiteit Brussel · International programme</p>
              <small>Led international work on open hydrological data, low-cost monitoring, open-source modelling and climate-resilient water management.</small>
              <ul>
                <li>Directed partners, budgets, work plans and reporting for projects valued at more than €1 million.</li>
                <li>Led publication of low-cost soil-moisture datasets through UNESCO-IHP WINS.</li>
                <li>Created SWAT+ training materials for Climate Risk Informed Decision Analysis.</li>
                <li>Co-developed dashboards that make spatial and time-series water data clear to technical and non-technical audiences.</li>
                <li>Won funding and coordinated universities, international organisations and water-sector partners.</li>
              </ul>
            </div>
          </div>

          <div className="cv-entry">
            <span>Jan 2017<br />– Sep 2020</span>
            <div>
              <h3>Water Resources Engineer</h3>
              <p>Rural Focus Limited · Kenya</p>
              <small>Turned water-resource assessments into buildable, costed solutions for drought-prone landscapes.</small>
              <ul>
                <li>Produced climate-resilient water strategies, masterplans and investment plans for communities, agriculture, livestock and wildlife.</li>
                <li>Surveyed and mapped water sources, pipelines and reservoir sites using GNSS, field equipment and spatial data.</li>
                <li>Analysed river flows, dam feasibility and rural distribution networks to identify risks and optimise supply.</li>
                <li>Assessed surface water, groundwater, floodwater and rainwater harvesting through technical, economic and socio-environmental studies.</li>
                <li>Designed and costed gravity systems, solar pumping, pipe networks, storage and rainwater-harvesting infrastructure.</li>
                <li>Led participatory mapping and translated climate evidence and local knowledge into adaptation priorities.</li>
                <li>Supervised construction against designs, budgets, schedules, environmental requirements and safety standards.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <p className="cv-section-title">SELECTED RESEARCH & INNOVATION</p>
          <div className="cv-output-grid">
            <article><span>01</span><h3>Belgian soil-moisture drought reconstruction</h3><p>Published a national assessment showing that 2011–2020 was Belgium’s driest decade since 1970 and demonstrating the importance of subsurface drought persistence and recovery.</p></article>
            <article><span>02</span><h3>Future groundwater recharge</h3><p>Assessed recharge seasonality with ten global climate models and four emissions scenarios, revealing a stronger concentration of recharge in winter and spring.</p></article>
            <article><span>03</span><h3>SPONGE</h3><p>Developed a modular decision-support model for comparing vegetation restoration, infiltration enhancement, wetlands and other water-retention measures.</p></article>
            <article><span>04</span><h3>Low-cost soil-moisture monitoring</h3><p>Evaluated sensor calibration and transferability and combined field monitoring with modelling to assess water retention in restored landscapes.</p></article>
          </div>
        </section>

        <section>
          <p className="cv-section-title">EDUCATION</p>
          <div className="cv-entry"><span>2022–2026</span><div><h3>PhD in Engineering Sciences</h3><p>Vrije Universiteit Brussel</p><small>Thesis: <em>Dynamics of subsurface water in a changing climate: An assessment of subsurface controls on water availability and climate adaptation in Belgium.</em></small></div></div>
          <div className="cv-entry"><span>2020–2022</span><div><h3>MSc in Water Resources Engineering</h3><p>KU Leuven & Vrije Universiteit Brussel</p><small>Thesis on climate-change impacts on agricultural water use and hydrological processes in the Nyando catchment, Kenya.</small></div></div>
          <div className="cv-entry"><span>2011–2016</span><div><h3>BSc in Civil Engineering</h3><p>University of Nairobi · First Class Honours</p><small>Engineering foundation in water infrastructure, surveying, design and project delivery.</small></div></div>
        </section>

        <section>
          <p className="cv-section-title">TECHNICAL EXPERTISE</p>
          <div className="cv-skill-grid">
            <div><h3>Hydrology & climate</h3><p>Drought analysis · groundwater recharge · water balance · catchment processes · climate-impact assessment · uncertainty</p></div>
            <div><h3>Models & engineering</h3><p>mHM · SWAT+ · WetSpass · MIKE 11 · NAM · EPANET · WaterGEMS · conceptual models · hydraulic design</p></div>
            <div><h3>Data & spatial analysis</h3><p>Python · Pandas · GeoPandas · scikit-learn · QGIS · ArcGIS · Google Earth Engine · remote sensing · HPC · Git/GitHub</p></div>
            <div><h3>Project delivery</h3><p>Feasibility studies · masterplans · investment planning · proposals · technical reporting · stakeholder engagement · construction supervision</p></div>
          </div>
        </section>

        <section>
          <p className="cv-section-title">LANGUAGES</p>
          <p className="cv-language">English <strong>Professional</strong> · Swahili <strong>Fluent</strong> · Maasai <strong>Native</strong> · Dutch <strong>B1, progressing</strong></p>
        </section>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
