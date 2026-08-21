"use client";

import { useEffect, useState } from "react";

const readings = [
  { className: "reading-rain", value: (tick: number) => `Rain ${(7.4 + Math.sin(tick * .72) * 2.1).toFixed(1)} mm` },
  { className: "reading-climate", value: (tick: number) => `Air ${(18.7 + Math.sin(tick * .31) * 1.9).toFixed(1)} °C` },
  { className: "reading-et", value: (tick: number) => `ET ${(2.4 + Math.sin(tick * .47) * .6).toFixed(1)} mm/d` },
  { className: "reading-flow", value: (tick: number) => `Runoff ${(2.8 + Math.cos(tick * .55) * .7).toFixed(1)} m³/s` },
  { className: "reading-soil", value: (tick: number) => `Soil ${(38 + Math.sin(tick * .44) * 6).toFixed(0)} %` },
  { className: "reading-recharge", value: (tick: number) => `Recharge ${(1.9 + Math.cos(tick * .38) * .5).toFixed(1)} mm/d` },
];

export default function HydrologyLive() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setTick((value) => value + 1), 1500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-visual live-hydrology catchment-journey" aria-label="An animated journey from a complete river catchment into a live hydrological system with changing model readings">
      <div className="catchment-overview" aria-hidden="true">
        <img className="catchment-overview-image" src="/hero-catchment-overview.webp" alt="" />
      </div>
      <div className="hydrology-process-layer">
        <img className="river-hero-image" src="/hero-live-hydrology.webp" alt="" />
        <div className="live-flow" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="model-mesh" aria-hidden="true" />
        <div className="live-readings" aria-hidden="true">
          {readings.map((reading) => <span className={`process-reading ${reading.className}`} key={reading.className}>{reading.value(tick)}</span>)}
        </div>
      </div>
    </div>
  );
}
