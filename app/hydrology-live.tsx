"use client";

import { useEffect, useState } from "react";

const readings = [
  { className: "reading-rain", value: (tick: number) => `${(7.4 + Math.sin(tick * .72) * 2.1).toFixed(1)} mm` },
  { className: "reading-climate", value: (tick: number) => `+${(1.7 + Math.sin(tick * .31) * .5).toFixed(1)} °C` },
  { className: "reading-flow", value: (tick: number) => `${(2.8 + Math.cos(tick * .55) * .7).toFixed(1)} m³/s` },
  { className: "reading-soil", value: (tick: number) => `${(38 + Math.sin(tick * .44) * 6).toFixed(0)} %` },
  { className: "reading-recharge", value: (tick: number) => `${(1.9 + Math.cos(tick * .38) * .5).toFixed(1)} mm/d` },
];

export default function HydrologyLive() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setTick((value) => value + 1), 1500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-visual live-hydrology" aria-label="A living catchment scene with changing hydrological model readings">
      <img className="river-hero-image" src="/hero-live-hydrology.webp" alt="A river flowing through a wooded wetland under changing weather" />
      <div className="live-flow" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="model-mesh" aria-hidden="true" />
      <div className="live-readings" aria-hidden="true">
        {readings.map((reading) => <span className={`process-reading ${reading.className}`} key={reading.className}>{reading.value(tick)}</span>)}
      </div>
    </div>
  );
}
